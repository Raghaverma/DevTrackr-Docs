import { NextRequest, NextResponse } from "next/server";
import { createDevTrackr } from "devtrackr";

// Initialize SDK with token form environment variables
const devtrackr = createDevTrackr({
    token: process.env.GITHUB_TOKEN || ""
});

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ username: string; endpoint: string }> }
) {
    const { username, endpoint } = await params;

    if (!process.env.GITHUB_TOKEN) {
        console.warn("GITHUB_TOKEN is missing. Devtrackr SDK may be rate limited or fail for some endpoints.");
    }

    try {
        let sdkData;
        let mappedData: any;

        switch (endpoint) {
            case "profile":
                sdkData = await devtrackr.getProfile(username);
                // Map SDK Profile to Frontend expected shape
                mappedData = {
                    login: sdkData.username,
                    id: 0, // SDK doesn't expose ID?
                    avatar_url: sdkData.avatarUrl,
                    name: sdkData.name,
                    bio: sdkData.bio,
                    public_repos: sdkData.publicRepos,
                    followers: sdkData.followers,
                    following: sdkData.following,
                    created_at: new Date().toISOString(), // SDK doesn't expose created_at?
                    // SDK doesn't expose location or blog
                    location: null,
                    blog: null
                };
                break;

            case "repositories":
                sdkData = await devtrackr.getRepositories(username);
                // Map SDK Repository[] to Frontend expected shape
                mappedData = sdkData.map(repo => ({
                    name: repo.name,
                    description: repo.description,
                    language: repo.primaryLanguage,
                    stargazers_count: repo.stars,
                    forks_count: repo.forks,
                    html_url: repo.repoUrl
                }));
                break;

            case "languages":
                sdkData = await devtrackr.getLanguageStats(username);
                // Map SDK LanguageStats to Record<string, number>
                mappedData = {};
                if (sdkData.languages) {
                    sdkData.languages.forEach(lang => {
                        mappedData[lang.name] = lang.percentage;
                    });
                }
                break;

            case "activity":
                sdkData = await devtrackr.getActivityTimeline(username);
                // Map SDK ActivityTimeline to Array<{ date, count }>
                mappedData = sdkData.map(item => ({
                    date: item.date,
                    count: item.commits
                }));
                break;

            case "contributions":
                // Demo client doesn't explicitly usage this in the viewing, 
                // but user asked to implement it.
                sdkData = await devtrackr.getContributionStats(username);
                mappedData = sdkData;
                break;

            case "commits":
                sdkData = await devtrackr.getRecentCommits(username);
                mappedData = sdkData;
                break;

            default:
                return NextResponse.json({ error: "Invalid endpoint" }, { status: 400 });
        }

        return NextResponse.json(mappedData);

    } catch (error: any) {
        console.error(`API Error [${endpoint}]:`, error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, GitCommit, GitPullRequest, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

// GitHub Language Colors mapping (simplified)
const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Vue: "#41b883",
    React: "#61dafb",
    Go: "#00ADD8",
    Java: "#b07219",
    Rust: "#dea584",
    Shell: "#89e051",
    C: "#555555",
    "C++": "#f34b7d",
    Ruby: "#701516",
    PHP: "#4F5D95",
    // default
    Other: "#ededed"
};

const getLangColor = (lang: string) => LANGUAGE_COLORS[lang] || LANGUAGE_COLORS.Other;

export function LanguageChart({ data }: { data: Record<string, number> }) {
    if (!data) return null;
    const languages = Object.entries(data).sort(([, a], [, b]) => b - a);
    const total = languages.reduce((acc, [, val]) => acc + val, 0);
    const topLanguages = languages.slice(0, 5); // Show top 5 in bar

    return (
        <div className="space-y-4">
            {/* Top Progress Bar */}
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-secondary">
                {topLanguages.map(([lang, count]) => (
                    <div
                        key={lang}
                        className="h-full transition-all duration-500 hover:opacity-80"
                        style={{
                            width: `${(count / total) * 100}%`,
                            backgroundColor: getLangColor(lang)
                        }}
                        title={`${lang}: ${((count / total) * 100).toFixed(1)}%`}
                    />
                ))}
            </div>

            {/* Horizontal Chips Layout */}
            <div className="flex flex-wrap gap-2">
                {languages.map(([lang, count]) => {
                    const percentage = ((count / total) * 100).toFixed(1);
                    const isMajor = (count / total) * 100 >= 1;

                    return (
                        <div
                            key={lang}
                            className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all",
                                isMajor ? "bg-secondary/40 border-white/5 hover:bg-secondary/60" : "bg-transparent border-transparent hover:bg-white/5 opacity-80"
                            )}
                        >
                            <div
                                className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10"
                                style={{ backgroundColor: getLangColor(lang) }}
                            ></div>
                            <span className="text-sm font-medium text-foreground">
                                {lang}
                            </span>
                            <span className="text-xs font-mono text-muted-foreground ml-1 opacity-70">{percentage}%</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

interface Commit {
    repo: string;
    message: string;
    additions: number;
    deletions: number;
    committedAt: string;
    commitUrl: string;
}

interface ActivityProps {
    data: Commit[]; // Now expects Commit[]
    profile: any;
}

export function ActivityChart({ data, profile }: ActivityProps) {
    if (!data || !Array.isArray(data)) return null;

    return (
        <Card className="border-border bg-card overflow-hidden">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground font-semibold flex items-center justify-between">
                    <span>Recent Activity</span>
                    <a
                        href={`https://github.com/${profile?.login}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-normal text-muted-foreground hover:text-white transition-colors"
                    >
                        <span>View on GitHub</span>
                        <ExternalLink className="h-3 w-3" />
                    </a>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
                        {data.slice(0, 10).map((commit, i) => (
                            <div
                                key={i}
                                className="flex-none w-[280px] snap-center bg-secondary/20 border border-white/5 rounded-xl p-4 hover:bg-secondary/30 transition-colors flex flex-col gap-3 group"
                            >
                                {/* Header: Repo & Date */}
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5 min-w-0">
                                        <GitCommit className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                                        <span className="text-xs font-mono text-purple-400 truncate">
                                            {commit.repo}
                                        </span>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground whitespace-nowrap bg-secondary/50 px-1.5 py-0.5 rounded">
                                        {new Date(commit.committedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>

                                {/* Message */}
                                <p className="text-sm text-foreground/90 line-clamp-2 min-h-[40px] leading-snug font-medium">
                                    {commit.message}
                                </p>

                                {/* Footer: Author & Stats */}
                                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
                                    <div className="flex items-center gap-2">
                                        {profile?.avatar_url && (
                                            <img src={profile.avatar_url} alt="" className="h-5 w-5 rounded-full opacity-80" />
                                        )}
                                        <span className="text-xs text-muted-foreground truncate max-w-[80px]">
                                            {profile?.name || profile?.login}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <span className="text-green-400 bg-green-400/10 px-1.5 rounded">+{commit.additions}</span>
                                        <span className="text-red-400 bg-red-400/10 px-1.5 rounded">-{commit.deletions}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* More Link Card */}
                        <a
                            href={`https://github.com/${profile?.login}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-none w-[100px] snap-center flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-white hover:bg-secondary/30 rounded-xl border border-white/5 transition-all"
                        >
                            <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center">
                                <ExternalLink className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-medium">View All</span>
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

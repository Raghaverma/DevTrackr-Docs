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
        <Card className="border-white/5 bg-luxury-charcoal/50 backdrop-blur-xl shadow-lg">
            <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-semibold text-white">Language Statistics</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-6">
                {/* Progress Bar */}
                <div className="flex h-4 w-full overflow-hidden rounded-full bg-black/40 ring-1 ring-white/5">
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
                <div className="flex flex-wrap gap-3">
                    {languages.map(([lang, count]) => {
                        const percentage = ((count / total) * 100).toFixed(1);
                        const isMajor = (count / total) * 100 >= 1;

                        return (
                            <div
                                key={lang}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300",
                                    isMajor
                                        ? "bg-white/5 border-white/5 hover:bg-white/10 text-white"
                                        : "bg-transparent border-transparent text-luxury-silver hover:bg-white/5"
                                )}
                            >
                                <div
                                    className="h-2 w-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                                    style={{ backgroundColor: getLangColor(lang) }}
                                ></div>
                                <span className="text-sm font-medium">
                                    {lang}
                                </span>
                                <span className="text-xs font-mono opacity-50 ml-1">{percentage}%</span>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
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
        <Card className="border-white/5 bg-luxury-charcoal/50 backdrop-blur-xl overflow-hidden shadow-lg">
            <CardHeader className="p-8 pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-white">Recent Activity</CardTitle>
                    <a
                        href={`https://github.com/${profile?.login}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-luxury-silver hover:text-white transition-colors group"
                    >
                        <span>View on GitHub</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="relative p-8 pt-4">
                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-6 overflow-x-auto pb-4 -mx-8 px-8 scrollbar-hide snap-x snap-mandatory">
                        {data.slice(0, 10).map((commit, i) => (
                            <div
                                key={i}
                                className="flex-none w-[320px] snap-center bg-black/20 border border-white/5 rounded-xl p-5 hover:border-white/10 hover:bg-black/40 transition-all duration-300 flex flex-col gap-4 group"
                            >
                                {/* Header: Repo & Date */}
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 min-w-0">
                                        <div className="p-1.5 rounded-md bg-white/5 text-luxury-silver group-hover:text-white transition-colors">
                                            <GitCommit className="h-4 w-4" />
                                        </div>
                                        <span className="text-xs font-mono text-purple-400 truncate tracking-tight">
                                            {commit.repo}
                                        </span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-semibold text-luxury-silver/50">
                                        {new Date(commit.committedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>

                                {/* Message */}
                                <p className="text-sm text-white/90 line-clamp-3 min-h-[60px] leading-relaxed font-normal">
                                    {commit.message}
                                </p>

                                {/* Footer: Author & Stats */}
                                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex items-center gap-2">
                                        {profile?.avatar_url && (
                                            <img src={profile.avatar_url} alt="" className="h-6 w-6 rounded-full opacity-80 ring-2 ring-black/50" />
                                        )}
                                        <span className="text-xs text-luxury-silver truncate max-w-[100px]">
                                            {profile?.name || profile?.login}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono font-medium">
                                        <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">+{commit.additions}</span>
                                        <span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">-{commit.deletions}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

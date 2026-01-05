import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, GitFork, Circle } from "lucide-react"

interface RepoGridProps {
    data: any[];
}

export function RepoGrid({ data }: RepoGridProps) {
    if (!data || data.length === 0) return null;

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white pl-1">Repositories</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.slice(0, 6).map((repo: any) => (
                    <Card
                        key={repo.name}
                        className="group flex flex-col border-white/5 bg-luxury-charcoal/30 hover:bg-luxury-charcoal/50 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    >
                        <CardHeader className="p-6 pb-4">
                            <CardTitle className="text-base font-semibold text-white flex items-center justify-between gap-2">
                                <a href={repo.html_url} target="_blank" rel="noreferrer" className="truncate hover:text-white/80 transition-colors">
                                    {repo.name}
                                </a>
                                <div className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-luxury-silver font-normal">
                                    Public
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 flex-1 flex flex-col">
                            <p className="text-sm text-luxury-silver/70 line-clamp-2 mb-6 h-10 leading-relaxed">
                                {repo.description || "No description provided."}
                            </p>

                            <div className="mt-auto flex items-center justify-between text-xs text-luxury-silver/50 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                {repo.language ? (
                                    <div className="flex items-center gap-1.5">
                                        <Circle className="h-2 w-2 fill-current text-white/40" />
                                        <span>{repo.language}</span>
                                    </div>
                                ) : <span></span>}

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 transition-colors group-hover:text-luxury-silver">
                                        <Star className="h-3.5 w-3.5" />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1 transition-colors group-hover:text-luxury-silver">
                                        <GitFork className="h-3.5 w-3.5" />
                                        <span>{repo.forks_count}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

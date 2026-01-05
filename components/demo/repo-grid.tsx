import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, GitFork, Circle } from "lucide-react"

interface RepoGridProps {
    data: any[];
}

export function RepoGrid({ data }: RepoGridProps) {
    if (!data || data.length === 0) return null;

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 6).map((repo: any) => (
                <Card key={repo.name} className="flex flex-col border-border bg-card hover:bg-secondary/40 transition-colors">
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg font-medium text-foreground truncate">
                            <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                {repo.name}
                            </a>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-between">
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                            {repo.description || "No description provided."}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            {repo.language && (
                                <div className="flex items-center gap-1">
                                    <Circle className="h-2 w-2 fill-current text-foreground" />
                                    <span>{repo.language}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-1">
                                <Star className="h-3 w-3" />
                                <span>{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <GitFork className="h-3 w-3" />
                                <span>{repo.forks_count}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

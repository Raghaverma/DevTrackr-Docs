import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, Link as LinkIcon, Calendar } from "lucide-react"

interface ProfileProps {
    data: any;
}

export function ProfileCard({ data }: ProfileProps) {
    if (!data) return null;

    return (
        <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
                <img
                    src={data.avatar_url}
                    alt={data.name}
                    className="h-20 w-20 rounded-full border-2 border-border"
                />
                <div>
                    <CardTitle className="text-2xl text-foreground">{data.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">@{data.login}</p>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {data.bio && <p className="text-muted-foreground">{data.bio}</p>}

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-foreground" />
                        <span>{data.followers} followers</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-foreground" />
                        <span>{data.following} following</span>
                    </div>
                    {data.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-foreground" />
                            <span>{data.location}</span>
                        </div>
                    )}
                    {data.blog && (
                        <div className="flex items-center gap-1">
                            <LinkIcon className="h-4 w-4 text-foreground" />
                            <a href={data.blog} target="_blank" rel="noreferrer" className="hover:text-foreground underline decoration-muted-foreground hover:decoration-foreground">
                                Website
                            </a>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

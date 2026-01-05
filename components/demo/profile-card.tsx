import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Link as LinkIcon } from "lucide-react"

interface ProfileProps {
    data: any;
}

export function ProfileCard({ data }: ProfileProps) {
    if (!data) return null;

    return (
        <Card className="border-white/5 bg-luxury-charcoal/50 backdrop-blur-xl overflow-hidden shadow-2xl">
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm"></div>
                        <img
                            src={data.avatar_url}
                            alt={data.name}
                            className="relative h-24 w-24 rounded-full border-2 border-white/10 shadow-xl"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">{data.name}</h2>
                            <p className="text-luxury-silver text-lg">@{data.login}</p>
                        </div>

                        {data.bio && (
                            <p className="text-luxury-silver/80 max-w-2xl leading-relaxed text-balance">
                                {data.bio}
                            </p>
                        )}

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-luxury-silver pt-2">
                            {data.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-white/40" />
                                    <span>{data.location}</span>
                                </div>
                            )}
                            {data.blog && (
                                <div className="flex items-center gap-2">
                                    <LinkIcon className="h-4 w-4 text-white/40" />
                                    <a
                                        href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-white transition-colors border-b border-transparent hover:border-white/20"
                                    >
                                        Website
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-8 md:gap-12 md:pl-8 md:border-l border-white/5 py-2">
                        <div className="text-center space-y-1">
                            <div className="text-2xl font-bold text-white">{data.followers}</div>
                            <div className="text-xs font-medium text-luxury-silver uppercase tracking-wider">Followers</div>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="text-2xl font-bold text-white">{data.following}</div>
                            <div className="text-xs font-medium text-luxury-silver uppercase tracking-wider">Following</div>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="text-2xl font-bold text-white">{data.public_repos}</div>
                            <div className="text-xs font-medium text-luxury-silver uppercase tracking-wider">Repos</div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

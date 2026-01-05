"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Search } from "lucide-react"
import { ProfileCard } from "./profile-card"
import { RepoGrid } from "./repo-grid"
import { LanguageChart, ActivityChart } from "./stats-charts"
import { GlassCard } from "@/components/ui/glass-card"

export function DemoClient() {
    const [username, setUsername] = useState("raghaverma")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState("")

    const fetchData = async () => {
        setLoading(true)
        setError("")
        setData(null)

        try {
            const [profile, repos, languages, activity] = await Promise.all([
                fetch(`/api/github/${username}/profile`).then(res => res.json()),
                fetch(`/api/github/${username}/repositories`).then(res => res.json()),
                fetch(`/api/github/${username}/languages`).then(res => res.json()),
                fetch(`/api/github/${username}/activity`).then(res => res.json())
            ])

            if (profile.error) throw new Error(profile.error);

            setData({ profile, repos, languages, activity })
        } catch (err) {
            setError("Failed to fetch data. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-1 group">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-luxury-silver group-focus-within:text-white transition-colors" />
                    <input
                        type="text"
                        placeholder="Enter GitHub username..."
                        className="flex h-12 w-full rounded-full border border-white/10 bg-luxury-charcoal/50 px-3 py-2 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-luxury-silver/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/20 disabled:cursor-not-allowed disabled:opacity-50 text-white backdrop-blur-md transition-all shadow-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <Button onClick={fetchData} disabled={loading} size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Fetch Data
                </Button>
            </div>

            {error && (
                <GlassCard className="text-center text-red-400 border-red-500/20 bg-red-500/5">
                    {error}
                </GlassCard>
            )}

            {data && (
                <div className="animate-fade-in space-y-8">
                    <div className="grid gap-8 md:grid-cols-[300px_1fr]">
                        <div className="space-y-8">
                            <ProfileCard data={data.profile} />
                            <LanguageChart data={data.languages} />
                            <ActivityChart data={data.activity} />
                        </div>
                        <div className="space-y-8">
                            <RepoGrid data={data.repos} />
                        </div>
                    </div>

                    <GlassCard className="p-0 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
                            <span className="text-xs font-medium text-luxury-silver">Using Devtrackr SDK</span>
                            <span className="text-[10px] text-white/50 uppercase tracking-wider">Code Example</span>
                        </div>
                        <div className="p-6 overflow-x-auto bg-[#0A0A0A]">
                            <pre className="text-sm font-mono text-white">
                                <span className="text-purple-400">const</span> devtrackr = createDevTrackr({"{"} token: <span className="text-green-400">"..."</span> {"}"});{'\n'}
                                <span className="text-purple-400">const</span> [profile, repos] = <span className="text-purple-400">await</span> Promise.all([{'\n'}
                                {"  "}devtrackr.getProfile(<span className="text-green-400">"{username}"</span>),{'\n'}
                                {"  "}devtrackr.getRepositories(<span className="text-green-400">"{username}"</span>){'\n'}
                                ]);
                            </pre>
                        </div>
                    </GlassCard>
                </div>
            )}
        </div>
    )
}

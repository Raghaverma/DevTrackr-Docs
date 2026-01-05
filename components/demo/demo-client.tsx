"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Search } from "lucide-react"
import { ProfileCard } from "./profile-card"
import { RepoGrid } from "./repo-grid"
import { LanguageChart, ActivityChart } from "./stats-charts"
import { GlassCard } from "@/components/ui/glass-card"
import { Card } from "@/components/ui/card"

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
            const [profile, repos, languages, activity, commits] = await Promise.all([
                fetch(`/api/github/${username}/profile`).then(res => res.json()),
                fetch(`/api/github/${username}/repositories`).then(res => res.json()),
                fetch(`/api/github/${username}/languages`).then(res => res.json()),
                fetch(`/api/github/${username}/activity`).then(res => res.json()),
                fetch(`/api/github/${username}/commits`).then(res => res.json())
            ])

            if (profile.error) throw new Error(profile.error);

            setData({ profile, repos, languages, activity, commits })
        } catch (err) {
            setError("Failed to fetch data. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-5xl mx-auto space-y-12 py-8">
            {/* Hero / Search Section */}
            <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto text-center">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                        Live Demo
                    </h1>
                    <p className="text-lg text-luxury-silver max-w-lg mx-auto leading-relaxed">
                        Enter a GitHub username to see the DevTrackr SDK in action, visualized with this dashboard.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-luxury-silver group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            placeholder="Enter GitHub username..."
                            className="flex h-12 w-full rounded-full border border-white/10 bg-luxury-charcoal/50 px-4 py-2 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-luxury-silver/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/20 disabled:cursor-not-allowed disabled:opacity-50 text-white backdrop-blur-md transition-all shadow-lg"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            suppressHydrationWarning
                        />
                    </div>
                    <Button onClick={fetchData} disabled={loading} size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105">
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Fetch Data
                    </Button>
                </div>
            </div>

            {error && (
                <GlassCard className="text-center text-red-400 border-red-500/20 bg-red-500/5 py-4">
                    {error}
                </GlassCard>
            )}

            {data && (
                <div className="animate-fade-in space-y-8">
                    {/* 1. Profile Banner */}
                    <ProfileCard data={data.profile} />

                    {/* 2. Language Stats */}
                    <LanguageChart data={data.languages} />

                    {/* 3. Recent Activity */}
                    <ActivityChart data={data.commits} profile={data.profile} />

                    {/* 4. Repositories */}
                    <RepoGrid data={data.repos} />

                    {/* 5. Code Example */}
                    <Card className="border-white/5 bg-luxury-black/80 overflow-hidden shadow-2xl mt-12">
                        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                            <span className="text-sm font-semibold text-luxury-silver">Using Devtrackr SDK</span>
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-red-500/50"></span>
                                <span className="flex h-2 w-2 rounded-full bg-yellow-500/50"></span>
                                <span className="flex h-2 w-2 rounded-full bg-green-500/50"></span>
                            </div>
                        </div>
                        <div className="p-8 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-purple-400">const</span> <span className="text-yellow-100">devtrackr</span> = <span className="text-blue-400">createDevTrackr</span>({"{"} <span className="text-white">token</span>: <span className="text-green-400">process.env.GITHUB_TOKEN</span> {"}"});{'\n\n'}
                                <span className="text-gray-500">// Fetch all data in parallel</span>{'\n'}
                                <span className="text-purple-400">const</span> [
                                <span className="text-white">profile</span>,
                                <span className="text-white">repos</span>,
                                <span className="text-white">stats</span>
                                ] = <span className="text-purple-400">await</span> <span className="text-yellow-100">Promise</span>.<span className="text-blue-400">all</span>([{'\n'}
                                <span className="text-yellow-100">devtrackr</span>.<span className="text-blue-400">getProfile</span>(<span className="text-green-400">"{username}"</span>),{'\n'}
                                <span className="text-yellow-100">devtrackr</span>.<span className="text-blue-400">getRepositories</span>(<span className="text-green-400">"{username}"</span>),{'\n'}
                                <span className="text-yellow-100">devtrackr</span>.<span className="text-blue-400">getLanguageStats</span>(<span className="text-green-400">"{username}"</span>){'\n'}
                                ]);
                            </pre>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}

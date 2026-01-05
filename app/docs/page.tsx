import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Introduction</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-luxury-silver text-lg">
                    Devtrackr is a comprehensive, type-safe SDK for fetching normalized GitHub data.
                    It simplifies the complexity of the GitHub API into easy-to-use methods for modern web applications.
                </p>
            </div>

            <section id="installation" className="space-y-4">
                <h2 className="scroll-m-20 border-b border-white/5 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
                    Installation
                </h2>
                <GlassCard className="font-mono text-sm text-white border-white/5 bg-luxury-charcoal/50">
                    npm install devtrackr
                </GlassCard>
                <p className="leading-7 text-luxury-silver">
                    Requirements: Node.js {">="} 18.0.0
                </p>
            </section>

            <section id="authentication" className="space-y-4">
                <h2 className="scroll-m-20 border-b border-white/5 pb-2 text-3xl font-semibold tracking-tight text-white">
                    Authentication
                </h2>
                <p className="leading-7 text-luxury-silver">
                    To use Devtrackr, you need a GitHub Personal Access Token (PAT).
                </p>
                <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-luxury-silver">
                    <li>Go to GitHub Settings {">"} Developer Settings {">"} Personal Access Tokens.</li>
                    <li>Generate a new token (classic).</li>
                    <li>Select the <code className="text-white bg-white/5 px-1 rounded">public_repo</code> scope (or <code className="text-white bg-white/5 px-1 rounded">repo</code> for private repositories).</li>
                    <li>Copy the token and store it in your environment variables.</li>
                </ol>
                <GlassCard className="border-white/5 bg-luxury-charcoal/50">
                    <div className="text-xs text-luxury-silver mb-2 font-semibold">.env.local</div>
                    <code className="text-sm font-mono text-green-400">GITHUB_TOKEN=ghp_xxxxxxxxxxxx</code>
                </GlassCard>
            </section>

            <section id="quick-start" className="space-y-4">
                <h2 className="scroll-m-20 border-b border-white/5 pb-2 text-3xl font-semibold tracking-tight text-white">
                    Quick Start
                </h2>
                <GlassCard className="p-0 overflow-hidden border-white/5 bg-[#0A0A0A]">
                    <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-2">
                        <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-xs text-luxury-silver font-mono ml-2">index.ts</div>
                    </div>
                    <div className="p-4 overflow-x-auto">
                        <pre className="text-sm font-mono leading-relaxed">
                            <span className="text-purple-400">import</span> {"{"} createDevTrackr {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">'devtrackr'</span>;{'\n\n'}
                            <span className="text-gray-500">// Initialize the client</span>{'\n'}
                            <span className="text-purple-400">const</span> client = createDevTrackr({"{ \n  "}token: process.env.GITHUB_TOKEN{" \n}"});{'\n\n'}
                            <span className="text-purple-400">async function</span> main() {"{"}{'\n'}
                            {"  "}<span className="text-purple-400">const</span> profile = <span className="text-purple-400">await</span> client.getProfile(<span className="text-green-400">'raghaverma'</span>);{'\n'}
                            {"  "}console.log(profile.name);{'\n'}
                            {"}"}
                        </pre>
                    </div>
                </GlassCard>
            </section>

            <section id="api-reference" className="space-y-8">
                <h2 className="scroll-m-20 border-b border-white/5 pb-2 text-3xl font-semibold tracking-tight text-white">
                    API Reference
                </h2>

                <div id="createDevTrackr" className="space-y-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">createDevTrackr(config)</h3>
                    <p className="text-luxury-silver">Creates a new instance of the DevTrackr client.</p>
                    <GlassCard className="p-4 text-sm font-mono text-luxury-silver border-white/5 bg-luxury-charcoal/30">
                        config: {"{ token?: string, baseUrl?: string }"}
                    </GlassCard>
                </div>

                <div id="getProfile" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold tracking-tight text-white">getProfile(username)</h3>
                        <Button variant="outline" size="sm" className="h-8 border-white/10 text-white hover:bg-white/5">Try it</Button>
                    </div>
                    <p className="text-luxury-silver">Fetches detailed profile information for a user.</p>
                    <GlassCard className="p-4 text-sm font-mono text-luxury-silver border-white/5 bg-luxury-charcoal/30">
                        username: string
                    </GlassCard>
                    <p className="text-sm text-luxury-silver">Returns: <code className="text-white bg-white/5 px-1 rounded">Promise{"<Profile>"}</code></p>
                </div>
            </section>

            <div className="h-20"></div>
        </div>
    )
}

import { GlassCard } from "@/components/ui/glass-card"
import { ShieldCheck, Zap, Database, AlertCircle, FileCode, Package } from "lucide-react"

const features = [
    {
        title: "Type-Safe",
        description: "Built with TypeScript for full type inference and autocomplete support out of the box.",
        icon: ShieldCheck,
    },
    {
        title: "Zero Dependencies",
        description: "Lightweight and efficient. Uses native Fetch API with no external runtime dependencies.",
        icon: Zap,
    },
    {
        title: "Normalized Data",
        description: "Pre-processed data structures ready for UI rendering. No more messy logic in your components.",
        icon: Database,
    },
    {
        title: "Typed Error Handling",
        description: "Comprehensive error classes for Rate Limits, Auth failures, and Network issues.",
        icon: AlertCircle,
    },
    {
        title: "Tree-Shakeable",
        description: "Import only what you need. Optimized for modern bundlers to keep your app size small.",
        icon: FileCode,
    },
    {
        title: "Dual Format",
        description: "Supports both ESM and CommonJS modules for maximum compatibility across environments.",
        icon: Package,
    },
]

export function Features() {

    return (
        <section className="container py-20 lg:py-32 mx-auto px-4 max-w-screen-xl relative z-10">
            <div className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Everything you need to build
                </h2>
                <p className="text-lg text-luxury-silver">
                    Devtrackr handles the complexity of the GitHub API so you can focus on building great user experiences.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <GlassCard key={feature.title} hoverEffect={true} className="border-white/5">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white">
                            <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                        <p className="text-luxury-silver leading-relaxed">
                            {feature.description}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </section>
    )
}

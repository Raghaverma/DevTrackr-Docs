import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-xl p-6",
                hoverEffect && "transition-all duration-300 hover:scale-[1.02] hover:bg-luxury-charcoal/70 hover:shadow-2xl hover:border-luxury-gray/50",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

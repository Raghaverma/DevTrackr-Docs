"use client"

import * as React from "react"
// We need radix-ui scroll area ideally, but for now just a div with class
// Actually, asking for "No external component libraries needed" meant UI kits.
// But Radix Primitives are headless.
// I'll implementing a simple div with overflow-auto for now to avoid installing radix if not needed.
// Or I can just write it as a simple component.

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative overflow-auto", className)}
        {...props}
    >
        {children}
    </div>
))
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }

import { DocsSidebar } from "@/components/docs/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mx-auto px-4 max-w-screen-2xl">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                    <DocsSidebar />
                </ScrollArea>
            </aside>
            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
                <div className="mx-auto w-full min-w-0">
                    {children}
                </div>
                <div className="hidden text-sm xl:block">
                    <div className="sticky top-16 -mt-10 pt-4">
                        <div className="pb-4">
                            <h4 className="mb-1 rounded-md py-1 text-sm font-semibold text-foreground">ToC</h4>
                            <ul className="space-y-2 text-xs text-muted-foreground">
                                <li><a href="#installation" className="hover:text-foreground">Installation</a></li>
                                <li><a href="#authentication" className="hover:text-foreground">Authentication</a></li>
                                <li><a href="#quick-start" className="hover:text-foreground">Quick Start</a></li>
                                <li><a href="#api-reference" className="hover:text-foreground">API Reference</a></li>
                                <li><a href="#models" className="hover:text-foreground">Data Models</a></li>
                                <li><a href="#errors" className="hover:text-foreground">Errors</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

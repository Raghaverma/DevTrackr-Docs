import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LanguageChart({ data }: { data: Record<string, number> }) {
    if (!data) return null;
    const languages = Object.entries(data).sort(([, a], [, b]) => b - a);
    const total = languages.reduce((acc, [, val]) => acc + val, 0);

    return (
        <Card className="border-border bg-card">
            <CardHeader>
                <CardTitle className="text-lg text-foreground">Language Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-secondary">
                    {languages.map(([lang, count], i) => (
                        <div
                            key={lang}
                            className="h-full"
                            style={{
                                width: `${(count / total) * 100}%`,
                                backgroundColor: i === 0 ? "#FAFAFA" : i === 1 ? "#A1A1AA" : i === 2 ? "#52525B" : "#27272A"
                            }}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    {languages.map(([lang, count], i) => (
                        <div key={lang} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: i === 0 ? "#FAFAFA" : i === 1 ? "#A1A1AA" : i === 2 ? "#52525B" : "#27272A" }}></div>
                                <span className="text-muted-foreground">{lang}</span>
                            </div>
                            <span className="text-muted-foreground">{((count / total) * 100).toFixed(1)}%</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export function ActivityChart({ data }: { data: any[] }) {
    if (!data) return null;
    const max = Math.max(...data.map(d => d.count));

    return (
        <Card className="border-border bg-card">
            <CardHeader>
                <CardTitle className="text-lg text-foreground">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex h-[150px] items-end gap-2 pt-4">
                    {data.map((item, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                            <div
                                className="w-full rounded-t-sm bg-secondary group-hover:bg-primary transition-all"
                                style={{ height: `${(item.count / max) * 100}%`, minHeight: '4px' }}
                            ></div>
                            <span className="text-[10px] text-muted-foreground">{item.date.split('-')[1]}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-center text-xs text-muted-foreground">Last 6 Months Commits</div>
            </CardContent>
        </Card>
    )
}

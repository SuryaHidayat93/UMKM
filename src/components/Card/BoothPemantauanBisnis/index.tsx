import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface BoothItemProps {
    booth: {
        id: string
        penyewa: string
        lokasi: string
        status: string
    }
    onDetailClick: () => void
}

export function BoothItem({ booth, onDetailClick }: BoothItemProps) {
    return (
        <Card className="mb-4">
            <CardHeader>
                <CardTitle className="text-sm font-bold text-unik">Booth {booth.id}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm mb-1"><span className="font-semibold">Penyewa:</span> {booth.penyewa}</p>
                <p className="text-sm mb-1"><span className="font-semibold">Lokasi:</span> {booth.lokasi}</p>
                <p className="text-sm mb-2">
                    <span className="font-semibold">Status:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${booth.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                        {booth.status}
                    </span>
                </p>
                <Button variant="outline" size="sm" className="font-bold text-unik w-full" onClick={onDetailClick}>
                    Detail
                </Button>
            </CardContent>
        </Card>
    )
}


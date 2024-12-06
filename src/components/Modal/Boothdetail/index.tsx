import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface BoothDetailModalProps {
    isOpen: boolean
    onClose: () => void
    boothData: {
        id: string
        penyewa: string
        lokasi: string
        status: string
        ktpImage: string
    }
}


const DataItem = ({ label, value }: { label: string; value: string }) => (
    <p className="mb-1">
        <span className="font-semibold">{label}:</span>{" "}
        <span>{value}</span>
    </p>
)

export function BoothDetailModal({ isOpen, onClose, boothData }: BoothDetailModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[90vw] w-full h-[90vh] max-h-[90vh] p-0 bg-white rounded-2xl pb-32">
                <DialogHeader className="sticky top-0 z-10 bg-background p-4 border-b">
                    <DialogTitle className="text-lg md:text-xl text-black">Detail Booth {boothData.id}</DialogTitle>
                    <button className="absolute right-3 top-3 text-black" onClick={onClose}>X</button>
                </DialogHeader>
                <ScrollArea className="h-[calc(90vh-4rem)] p-4 md:p-6">
                    <Card className="border-0 shadow-none mb-6">
                        <CardHeader>
                            <CardTitle className="text-base md:text-lg text-black">Biodata Penyewa</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <DataItem label="Nama Penyewa" value={boothData.penyewa} />
                            <DataItem label="No HP" value="081234567890" />
                            <DataItem label="Alamat Domisili" value="Jl. Sudirman No. 123, Pekanbaru" />
                            <DataItem label="Alamat Lokasi Booth" value={boothData.lokasi} />
                            <DataItem label="NIK" value="1471XXXXXXXXXX" />
                            <DataItem label="Jenis Kelamin" value="Perempuan" />
                            <DataItem label="Awal Penyewaan" value="01/01/2023" />
                            <DataItem label="Akhir Penyewaan" value="31/12/2023" />
                            <div className="mt-4">
                                <p className="font-semibold mb-2">KTP Penyewa:</p>
                                <img src={boothData.ktpImage} alt="KTP Penyewa" className="rounded-lg border w-full max-w-md h-auto" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-none mb-6">
                        <CardHeader>
                            <CardTitle className="text-base md:text-lg">Riwayat Pembayaran</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>Tanggal: 01/05/2023, Jumlah: Rp 500.000, Jatuh Tempo: 15/05/2023</li>
                                <li>Tanggal: 01/04/2023, Jumlah: Rp 500.000, Jatuh Tempo: 15/04/2023</li>
                                <li>Tanggal: 01/03/2023, Jumlah: Rp 500.000, Jatuh Tempo: 15/03/2023</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-base md:text-lg">Riwayat Kerusakan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>Tanggal: 10/04/2023, Kerusakan: Kebocoran atap</li>
                                <li>Tanggal: 05/02/2023, Kerusakan: Pintu rusak</li>
                            </ul>
                        </CardContent>
                    </Card>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}


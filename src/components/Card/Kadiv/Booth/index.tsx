import { useState, useEffect } from "react";
interface BoothCardProps {
    boothName: string;
    initialPenyewa: string;
    initialKerusakan: string;
    initialStatus: string;
}
export default function BoothCard({ boothName, initialPenyewa, initialKerusakan, initialStatus }: BoothCardProps) {
    const [penyewa, setPenyewa] = useState<string | null>(initialPenyewa);
    const [status, setStatus] = useState(initialStatus);

    useEffect(() => {
        setStatus(initialStatus);
    }, [initialStatus]);

    useEffect(() => {
        setPenyewa(initialPenyewa);
    }, [initialPenyewa]);

    // Penentuan warna berdasarkan status
    const cardColor = status === "kosong"
        ? "border-unik"
        : status === "rusak"
            ? "border-yellow-500"
            : "border-merah";

    const divColor = status === "kosong"
        ? "bg-unik"
        : status === "rusak"
            ? "bg-yellow-500"
            : "bg-merah";

    // Fungsi untuk menghapus penyewa
    const handleHapusPenyewa = () => {
        if (status === "rusak") {
            setPenyewa(null); // Hanya menghapus penyewa jika status "rusak"
        } else {
            setPenyewa(null); // Menghapus penyewa
            setStatus("kosong"); // Mengubah status menjadi "kosong" jika status bukan "rusak"
        }
    };

    // Fungsi untuk menandai rusak
    const handleTandaiRusak = () => {
        setStatus("rusak"); // Mengubah status menjadi rusak
    };

    // Fungsi untuk menandai sudah diperbaiki
    const handleTandaiSudahDiperbaiki = () => {
        if (penyewa) {
            setStatus("terisi"); // Jika ada penyewa, ubah status menjadi terisi
        } else {
            setStatus("kosong"); // Jika tidak ada penyewa, ubah status menjadi kosong
        }
    };

    return (
        <div className={`rounded-lg shadow-md w-full border pb-3 bg-white text-white ${cardColor}`}>
            <div className={`${divColor} rounded-t-lg w-full justify-between flex px-4 py-2`}>
                <h3 className="text-lg font-bold">{boothName}</h3>
                <div className="rounded-lg px-2 items-center flex justify-center border border-white">
                    {status === "kosong" && <img src="/images/ceklis2.png" alt="" />}
                    {status === "rusak" && <img src="/images/alert.png" alt="" />}
                    {status === "terisi" && <img src="/images/x2.png" alt="" />}
                </div>
            </div>
            <div className="gap-2 ml-4">
                <p className="text-black">{penyewa ? `Penyewa: ${penyewa}` : "Tidak ada penyewa"}</p>
                <p className="text-black">Riwayat Kerusakan: {initialKerusakan}</p>
            </div>
            <div className="mt-4 ml-3 gap-3 w-full flex flex-col items-start">

                <button className="bg-white border flex flex-row items-center justify-center border-unik text-black py-1 px-3 rounded-lg group hover:bg-unik hover:text-white">
                    <img
                        src="/images/kalender.png"
                        alt="Kalender"
                        className="h-4 mr-2 transition-all duration-300 group-hover:hidden"
                    />
                    <img
                        src="/images/kalender(putih).png"
                        alt="Kalender Putih"
                        className="h-4 mr-2 transition-all duration-300 hidden group-hover:inline"
                    />
                    Lihat Riwayat
                </button>

                <div className="flex flex-row gap-3">
                    <button className="bg-white border flex flex-row items-center justify-center border-unik text-black py-1 px-3 rounded-lg group hover:bg-unik hover:text-white">
                        <img
                            src="/images/plus(hijau).png"
                            alt="Kalender"
                            className="h-4 mr-2 transition-all duration-300 group-hover:hidden"
                        />
                        <img
                            src="/images/plus.png"
                            alt="Kalender Putih"
                            className="h-4 mr-2 transition-all duration-300 hidden group-hover:inline"
                        />
                        Tambah Riwayat
                    </button>

                    {(status === "kosong" || status === "terisi") && (
                        <button className="bg-yellow-500 text-white flex flex-row items-center py-1 px-3 rounded-lg hover:bg-yellow-600"
                            onClick={handleTandaiRusak}>
                            Tandai Rusak
                        </button>
                    )}
                </div>
                {status === "rusak" && (
                    <button className="bg-white rounded-lg border text-yellow-500 hover:text-white border-yellow-500 py-1 px-3 hover:bg-yellow-500"
                        onClick={handleTandaiSudahDiperbaiki}>
                        Tandai Sudah Diperbaiki
                    </button>
                )}
                {(status === "terisi" || (status === "rusak" && penyewa)) && (
                    <button
                        className="bg-red-600 py-1 px-3 rounded-lg hover:bg-red-700"
                        onClick={handleHapusPenyewa}>
                        Hapus Penyewa
                    </button>
                )}
            </div>
        </div>
    );
}

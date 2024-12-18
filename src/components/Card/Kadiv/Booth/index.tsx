import ModalRiwayatKerusakanBooth from "@/components/Modal/RiwayatKerusakanBooth";
import ModalTambahRiwayatKerusakanBooth from "@/components/Modal/TambahRIwayatKerusakan";
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

    // Modal Hapus Penyewa
    const [isModalHapusPenyewa, setIsModalHapusPenyewa] = useState(false);
    const openModalHapusPenyewa = () => setIsModalHapusPenyewa(true);
    const closeModalHapusPenyewa = () => setIsModalHapusPenyewa(false);

    // Modal Riwayat Kerusakan
    const [isModalRiwayatKerusakanOpen, setisModalRiwayatKerusakanOpen] = useState(false);
    const openModalRiwayatKerusakan = () => setisModalRiwayatKerusakanOpen(true);
    const closeModalRiwayatKerusakan = () => setisModalRiwayatKerusakanOpen(false);

    //ModalTambah Riwayat Kerusakan
    const [isModalTambahRiwayatKerusakanOpen, setIsModalTambahRiwayatKerusakanOpen] = useState(false);
    const openModalTambahRiwayatKerusakan = () => setIsModalTambahRiwayatKerusakanOpen(true);
    const closeModalTambahRiwayatKerusakan = () => setIsModalTambahRiwayatKerusakanOpen(false);

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
        <div className={`rounded-lg shadow-md w-full border pb-3 bg-white text-white ${cardColor}`} >
            <ModalRiwayatKerusakanBooth isOpen={isModalRiwayatKerusakanOpen} onClose={closeModalRiwayatKerusakan} />
            <ModalTambahRiwayatKerusakanBooth isOpen={isModalTambahRiwayatKerusakanOpen} onClose={closeModalTambahRiwayatKerusakan} />
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

                <button
                    className="bg-white border flex flex-row items-center justify-center border-unik text-black py-1 px-3 rounded-lg group hover:bg-unik hover:text-white"
                    onClick={openModalRiwayatKerusakan}>
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
                    <button
                        className="bg-white border flex flex-row items-center justify-center border-unik text-black py-1 px-3 rounded-lg group hover:bg-unik hover:text-white"
                        onClick={openModalTambahRiwayatKerusakan}>
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
                        onClick={openModalHapusPenyewa}>
                        Hapus Penyewa
                    </button>
                )}
                {isModalHapusPenyewa && (
                    <div className="fixed flex inset-0 items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="relative flex flex-col w-full max-w-md p-6 bg-white animate-popup rounded-lg shadow-lg">
                            <button className="absolute right-3 top-3 text-black"
                                onClick={closeModalHapusPenyewa}>X</button>
                            <h2 className="text-xl font-semibold text-center text-black">
                                Hapus Penyewa
                            </h2>
                            <p className="text-abu text-center">Anda Yakin Ingin Menghapus Penyewa?</p>
                            <div className="flex justify-between mt-6">
                                <button className="bg-abu2 text-black px-4 py-2 rounded-lg"
                                    onClick={closeModalHapusPenyewa}>
                                    Batal
                                </button>
                                <button className="bg-merah text-white px-4 py-2 rounded-lg"
                                    onClick={() => {
                                        handleHapusPenyewa();
                                        closeModalHapusPenyewa();
                                    }}>
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

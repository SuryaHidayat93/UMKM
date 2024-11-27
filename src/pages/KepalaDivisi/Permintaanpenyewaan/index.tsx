import Navbar from "@/components/navbar/navbarKD";
import CardPermintaanSewa from "@/components/Card/Kadiv/PermintaanSewa";
import { useState } from "react";

export default function Permintaanpenyewaan() {
    const [isModalPermintaanPenyewaanOpen, setIsModalPermintaanPenyewaanOpen] = useState(false);
    const [isModalBoothOpen, setIsModalBoothOpen] = useState(false);
    const [isModalBerhasilDipilihOpen, setIsModalBerhasilDipilihOpen] = useState(false);

    const openModalPermintaanPenyewaan = () => setIsModalPermintaanPenyewaanOpen(true);
    const closeModalPermintaanPenyewaan = () => setIsModalPermintaanPenyewaanOpen(false);

    const openModalBooth = () => setIsModalBoothOpen(true);
    const closeModalBooth = () => setIsModalBoothOpen(false);

    const openModalBerhasilDipilih = () => setIsModalBerhasilDipilihOpen(true);
    const closeModalBerhasilDipilih = () => setIsModalBerhasilDipilihOpen(false);

    const handlekonfirm = () => {
        closeModalBooth();
        openModalBerhasilDipilih();
        closeModalPermintaanPenyewaan();
    }


    const dataPelanggan = {
        nama: "John Doe",
        noHp: "081234567890",
        alamatDomisili: "Jl. Kebon Jeruk No. 123",
        nik: "1234567890123456",
        alamatKtp: "Jl. Mangga Dua No. 45",
        jenisKelamin: "Laki-laki",
        awalPenyewaan: "2024-11-25",
        akhirPenyewaan: "2024-12-01",
        rencanaLokasiBooth: "Plaza Indonesia, Jakarta",
    };

    return (
        <div className="h-screen w-full overflow-y-auto bg-primary">
            <Navbar isHamburger title="Permintaan Penyewaan" />

            {isModalPermintaanPenyewaanOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-4xl px-8 pb-32 animate-slideIn rounded-md overflow-y-auto max-h-screen relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                            onClick={closeModalPermintaanPenyewaan}
                        >
                            ×
                        </button>
                        <h2 className="text-2xl font-semibold text-black text-center">Informasi Pelanggan</h2>
                        <p className="text-center text-gray-600">Tinjau data yang telah diisi oleh calon penyewa</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div>
                                <label className="block text-sm font-medium text-black">Nama</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.nama}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">No HP</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.noHp}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Alamat Domisili</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.alamatDomisili}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">NIK</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.nik}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Alamat KTP</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.alamatKtp}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Jenis Kelamin</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.jenisKelamin}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Awal Penyewaan</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.awalPenyewaan}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Akhir Penyewaan</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.akhirPenyewaan}</p>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-black">Rencana Lokasi Booth</label>
                                <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{dataPelanggan.rencanaLokasiBooth}</p>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <img
                                src="/images/OIP 2.png"
                                alt="Preview KTP"
                                className="max-w-xs mx-auto rounded-md border"
                            />
                        </div>

                        <div className="mt-6 flex justify-between gap-4">
                            <button
                                className="px-6 py-2 bg-merah text-white rounded-md hover:bg-red-700 transition"
                                onClick={closeModalPermintaanPenyewaan}
                            >
                                Tolak
                            </button>
                            <button
                                onClick={openModalBooth}
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                            >
                                Konfirmasi Pengajuan
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isModalBoothOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative flex flex-col items-center w-full max-w-md p-6 animate-popup gap-4 bg-white rounded-lg shadow-lg">
                        <button
                            onClick={closeModalBooth}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ×
                        </button>
                        <h2 className="text-xl font-semibold text-center text-unik">Pilih Booth</h2>
                        <select className="border border-abu2 rounded-md px-3 py-2 w-5/6 text-black">
                            <option value="1">Booth 1</option>
                            <option value="2">Booth 2</option>
                            <option value="3">Booth 3</option>
                        </select>
                        <button
                            className="bg-unik text-white w-5/6 px-4 py-2 rounded-lg"
                            onClick={handlekonfirm}
                        >
                            Konfirmasi
                        </button>
                    </div>
                </div>
            )}

            {isModalBerhasilDipilihOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md animate-popup w-80 text-center">
                        <h4 className="text-xl font-semibold text-black">Booth Berhasil Dipilih!</h4>
                        <p className="text-sm text-abu mb-4">Booth Anda telah berhasil dipilih.</p>
                        <button
                            onClick={closeModalBerhasilDipilih}
                            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}

            <div className="w-full grid grid-cols-1 md:grid-cols-3 pb-20 gap-y-6 gap-x-8 md:px-20 place-items-center">
                <CardPermintaanSewa Nama={dataPelanggan.nama} Alamat={dataPelanggan.alamatDomisili} Tanggal={new Date()} Detail={openModalPermintaanPenyewaan} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
            </div>
        </div>
    );
}
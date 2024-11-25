import React from "react";
import { useState } from "react";
import ModalPilihBooth from "../PilihBooth";

interface ModalInformasiPelangganProps {
    isOpen: boolean;
    data: {
        nama: string;
        noHp: string;
        alamatDomisili: string;
        nik: string;
        alamatKtp: string;
        jenisKelamin: string;
        awalPenyewaan: string;
        akhirPenyewaan: string;
        rencanaLokasiBooth: string;
    };
    onClose: () => void;
}

const ModalInformasiPelanggan: React.FC<ModalInformasiPelangganProps> = ({
    isOpen,
    data,
    onClose,

}) => {
    const [isModalBoothOpen, setIsModalBoothOpen] = useState(false);

    const openModalBooth = () => setIsModalBoothOpen(true);
    const closeModalBooth = () => setIsModalBoothOpen(false);

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <ModalPilihBooth isOpen={isModalBoothOpen} onClose={closeModalBooth} />
            <div className="bg-white w-full max-w-4xl px-8 pb-32 animate-slideIn md:animate-popup rounded-md overflow-y-auto max-h-screen relative">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    x
                </button>
                {/* Header */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-semibold text-black">Informasi Pelanggan</h2>
                    <p className="text-abu">Tinjau data yang telah diisi oleh calon penyewa</p>
                </div>

                {/* Data Diri */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nama */}
                    <div>
                        <label className="block text-sm font-medium text-black">Nama</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.nama}</p>
                    </div>

                    {/* No HP */}
                    <div>
                        <label className="block text-sm font-medium text-black">No HP</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.noHp}</p>
                    </div>

                    {/* Alamat Domisili */}
                    <div>
                        <label className="block text-sm font-medium text-black">Alamat Domisili</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.alamatDomisili}</p>
                    </div>

                    {/* NIK */}
                    <div>
                        <label className="block text-sm font-medium text-black">NIK</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.nik}</p>
                    </div>

                    {/* Alamat KTP */}
                    <div>
                        <label className="block text-sm font-medium text-black">Alamat KTP</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.alamatKtp}</p>
                    </div>

                    {/* Jenis Kelamin */}
                    <div>
                        <label className="block text-sm font-medium text-black">Jenis Kelamin</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.jenisKelamin}</p>
                    </div>

                    {/* Awal Penyewaan */}
                    <div>
                        <label className="block text-sm font-medium text-black">Awal Penyewaan</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.awalPenyewaan}</p>
                    </div>

                    {/* Akhir Penyewaan */}
                    <div>
                        <label className="block text-sm font-medium text-black">Akhir Penyewaan</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.akhirPenyewaan}</p>
                    </div>

                    {/* Rencana Lokasi Booth */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-black">Rencana Lokasi Booth</label>
                        <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md text-black">{data.rencanaLokasiBooth}</p>
                    </div>
                </div>

                {/* Preview KTP */}
                <div className="mt-6 text-center">
                    <img
                        src="/images/OIP 2.png"
                        alt="Preview KTP"
                        className="max-w-xs mx-auto rounded-md border"
                    />
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-between gap-4">
                    <button
                        className="px-6 py-2 bg-merah text-white rounded-md hover:bg-red-700 transition"
                        onClick={onClose}>
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
    );
};

export default ModalInformasiPelanggan;

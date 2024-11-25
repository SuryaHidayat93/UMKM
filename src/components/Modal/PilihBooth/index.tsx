import React, { useState } from "react";
import PopupBoothBerhasilDipilih from "../SimpanPilihan";
interface ModalPilihBoothProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
}

const ModalPilihBooth: React.FC<ModalPilihBoothProps> = ({ isOpen, onClose }) => {
    const [isModalBerhasilDipilihOpen, setIsModalBerhasilDipilihOpen] = useState(false);

    const openModalBerhasilDipilih = () => setIsModalBerhasilDipilihOpen(true);
    const closeModalBerhasilDipilih = () => setIsModalBerhasilDipilihOpen(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <PopupBoothBerhasilDipilih isOpen={isModalBerhasilDipilihOpen} onClose={closeModalBerhasilDipilih} />
            <div className="relative flex flex-col w-full max-w-md p-6 animate-popup gap-4 bg-white rounded-lg shadow-lg">
                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ×
                </button>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-semibold text-center text-unik">
                        Pilih Booth
                    </h2>
                    <p className="text-abu text-center">Silahkan  booth untuk penyewa</p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center">
                    <select className="border border-abu2 rounded-md px-3 py-2 w-5/6 text-black">

                        <option value="1" className="text-black">Booth 1</option>
                        <option value="2" className="text-black">Booth 2</option>
                        <option value="3" className="text-black">Booth 3</option>
                    </select>
                    <button className="bg-unik text-white w-5/6 px-4 py-2 rounded-lg"
                        onClick={openModalBerhasilDipilih}>
                        Konfirmasi
                    </button>
                    <button className="bg-abu2 text-black w-5/6 px-4 py-2 rounded-lg" onClick={onClose}>
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ModalPilihBooth;
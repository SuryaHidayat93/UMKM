import React from "react";

interface ModalHapuspenyewaProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalHapuspenyewa: React.FC<ModalHapuspenyewaProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed flex inset-0 items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative flex flex-col w-full max-w-md p-6 bg-white animate-popup rounded-lg shadow-lg">
                <button className="absolute right-3 top-3 text-black"
                    onClick={onClose}>X</button>
                <h2 className="text-xl font-semibold text-center text-black">
                    Hapus Penyewa
                </h2>
                <p className="text-abu text-center">Anda Yakin Ingin Menghapus Penyewa?</p>
                <div className="flex justify-between mt-6">
                    <button className="bg-abu2 text-black px-4 py-2 rounded-lg"
                        onClick={onClose}>
                        Batal
                    </button>
                    <button className="bg-merah text-white px-4 py-2 rounded-lg"
                        onClick={onClose}>
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ModalHapuspenyewa;


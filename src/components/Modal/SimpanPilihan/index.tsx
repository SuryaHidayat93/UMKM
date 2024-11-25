import React from "react";

interface PopupBoothBerhasilDipilihProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupBoothBerhasilDipilih: React.FC<PopupBoothBerhasilDipilihProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md w-80 text-center">
                <h4 className="text-xl font-semibold">Booth Berhasil Dipilih!</h4>
                <p className="text-sm text-gray-500 mb-4">Booth Anda telah berhasil dipilih.</p>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                    Tutup
                </button>
            </div>
        </div>
    );
};

export default PopupBoothBerhasilDipilih;

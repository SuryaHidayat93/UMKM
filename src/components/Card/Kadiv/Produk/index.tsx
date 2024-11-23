"use client";

import Image from "next/image";

interface CardProdukProps {
    namaProduk: string;
    ukuran: string;
    deskripsi: string;
    harga: string;
    gambar: string; // URL atau path gambar
    onEdit?: () => void; // Fungsi callback untuk tombol Edit
    onDelete?: () => void; // Fungsi callback untuk tombol Hapus
}

const CardProduk: React.FC<CardProdukProps> = ({
    namaProduk,
    ukuran,
    deskripsi,
    harga,
    gambar,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="bg-white rounded-xl p-4 shadow-md gap-3 flex flex-col">
            {/* Header Card */}
            <div className="h-1/6 w-full ">
                <h1 className="font-bold text-xl text-black">{namaProduk}</h1>
                <p className="text-abu">{ukuran}</p>
            </div>

            {/* Gambar Produk */}
            <div className="h-5/6 w-full flex items-center justify-center ">
                <Image
                    className="bg-none"
                    src={gambar}
                    alt={`Gambar ${namaProduk}`}
                    width={340}
                    height={240}
                />
            </div>

            {/* Deskripsi */}
            <p className="text-abu text-sm font-medium">{deskripsi}</p>

            {/* Harga */}
            <h1 className="font-bold text-xl text-black">{harga}</h1>

            {/* Tombol Aksi */}
            <div className="flex flex-row justify-between w-full">
                <button
                    className="bg-abu2 px-10 py-2 text-black rounded-lg"
                    onClick={onEdit}
                >
                    Edit
                </button>
                <button
                    className="bg-merah px-10 py-2 rounded-md"
                    onClick={onDelete}
                >
                    Hapus
                </button>
            </div>
        </div>
    );
};

export default CardProduk;

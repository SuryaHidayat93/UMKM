import { useState } from "react";
import Navbar from "@/components/navbar/navbarKD";
import CardProduk from "@/components/Card/Kadiv/Produk";
import Modaleditproduk from "@/components/Modal/EditProduk";
import Modaltambahproduk from "@/components/Modal/TambahProduk";
import ModalHapusproduk from "@/components/Modal/DelateProduk";

export default function Pengelolaanproduk() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTambahProdukOpen, setIsModalTambahProdukOpen] = useState(false);
    const [isModalHapusProdukOpen, setIsModalHapusProdukOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openTambahProduk = () => setIsModalTambahProdukOpen(true);
    const closeTambahProduk = () => setIsModalTambahProdukOpen(false);

    const openDelateProduk = () => setIsModalHapusProdukOpen(true);
    const closeDelateProduk = () => setIsModalHapusProdukOpen(false);

    const handleSubmit = () => {
        console.log("Produk berhasil disimpan!");
        closeModal();
    };

    // Dummy data produk
    const dummyDataProduk = [
        {
            namaProduk: "Booth Kayu Premium",
            ukuran: "12X12X12",
            deskripsi: "Booth dengan bahan kayu premium dan kualitas tinggi",
            harga: "Rp. 100.000",
            gambar: "/images/booth2.png",
        },
        {
            namaProduk: "Meja Lipat",
            ukuran: "15X10X10",
            deskripsi: "Meja lipat praktis dan kuat dengan desain minimalis",
            harga: "Rp. 150.000",
            gambar: "/images/booth2.png",
        },
        {
            namaProduk: "Rak Buku Kayu",
            ukuran: "10X10X20",
            deskripsi: "Rak buku berbahan kayu berkualitas untuk ruang tamu",
            harga: "Rp. 120.000",
            gambar: "/images/booth2.png",
        },
        {
            namaProduk: "Kursi Taman",
            ukuran: "18X12X15",
            deskripsi: "Kursi kayu taman yang nyaman dan tahan cuaca",
            harga: "Rp. 200.000",
            gambar: "/images/booth2.png",
        },
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-unik2">
            <Navbar isHamburger title="Pengelolaan Produk" />

            {/* Container Utama */}
            <div className="w-full flex flex-col items-center justify-center">
                {/* Tombol Tambahkan Produk */}
                <div className="w-full md:items-end md:px-20 flex flex-col items-center mt-6 md:mt-10 justify-center">
                    <button
                        onClick={openTambahProduk}
                        className="w-4/6 md:w-1/6 h-10 bg-unik rounded-md flex flex-row items-center justify-center gap-2"
                    >
                        <img src="/images/plus.png" alt="Tambah Produk Icon" />
                        <p>Tambahkan Produk</p>
                    </button>
                </div>

                {/* Modal Tambah Produk */}
                <Modaleditproduk
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleSubmit}
                />

                <Modaltambahproduk
                    isOpen={isModalTambahProdukOpen}
                    onClose={closeTambahProduk}
                    onSubmit={handleSubmit}
                />

                <ModalHapusproduk
                    isOpen={isModalHapusProdukOpen}
                    onClose={closeDelateProduk}
                />

                {/* Produk List */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 h-full w-full place-items-center py-5 md:px-11">
                    {dummyDataProduk.map((produk, index) => (
                        <CardProduk
                            key={index}
                            namaProduk={produk.namaProduk}
                            ukuran={produk.ukuran}
                            deskripsi={produk.deskripsi}
                            harga={produk.harga}
                            gambar={produk.gambar}
                            onEdit={openModal}
                            onDelete={openDelateProduk}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import { useState } from "react";
import Navbar from "@/components/navbar/navbarKD";
import CardProduk from "@/components/Card/Kadiv/Produk";

export default function Pengelolaanproduk() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleEdit = () => {
        alert("Edit produk!");
    };

    const handleDelete = () => {
        alert("Hapus produk!");
    };

    return (
        <div className="h-screen w-full overflow-y-auto bg-primary">
            <Navbar isHamburger title="Pengelolaan Produk" />

            {/* Container Utama */}
            <div className="w-full bg-slate-400 flex flex-col items-center justify-center">
                {/* Tombol Tambahkan Produk */}
                <div className="w-full md:items-end md:px-20 bg-slate-500 flex flex-col items-center mt-6 md:mt-10 justify-center">
                    <button
                        onClick={openModal}
                        className="w-4/6 md:w-1/6 h-10 bg-unik rounded-md flex flex-row items-center justify-center gap-2"
                    >
                        <img src="/images/plus.png" alt="Tambah Produk Icon" />
                        <p>Tambahkan Produk</p>
                    </button>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        {/* Isi Modal */}
                        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                            {/* Tombol Close */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                            >
                                ×
                            </button>

                            <h2 className="text-xl font-semibold text-center text-green-700 mb-4">
                                Tambah Produk
                            </h2>

                            <form className="space-y-4">
                                {/* Nama Produk */}
                                <div>
                                    <label className="block text-sm font-medium text-black">
                                        Nama Produk
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Masukkan nama produk"
                                    />
                                </div>

                                {/* Ukuran */}
                                <div>
                                    <label className="block text-sm font-medium text-black">
                                        Ukuran
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full text-black mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Masukkan ukuran"
                                    />
                                </div>

                                {/* Deskripsi */}
                                <div>
                                    <label className="block text-sm font-medium text-black">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        className="w-full text-black mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                        rows="3"
                                        placeholder="Masukkan deskripsi produk"
                                    ></textarea>
                                </div>

                                {/* Harga */}
                                <div>
                                    <label className="block text-sm font-medium text-black">
                                        Harga
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full mt-1 px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Masukkan harga produk"
                                    />
                                </div>

                                {/* Gambar Produk */}
                                {/* Gambar Produk */}
                                <div>
                                    <label className="block text-sm font-medium text-black">
                                        Gambar Produk
                                    </label>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="file-upload"
                                            className="flex items-center justify-center w-full px-3 py-2 mt-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer"
                                        >
                                            <img src="/images/export.png" className="mr-2 ml-2" alt="Upload Icon" />
                                            Unggah Gambar
                                        </label>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    console.log("File yang diunggah:", file);
                                                    // Anda bisa memproses file di sini (misalnya mengunggah ke server)
                                                }
                                            }}
                                        />
                                    </div>
                                </div>


                                {/* Tombol Aksi */}
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="px-4 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-white bg-unik hover:bg-green-700 rounded-lg"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Produk List */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 h-full w-full place-items-center bg-slate-200 py-5 md:px-11">
                    <CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                    <CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    /><CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    /><CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    /><CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    /><CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    /><CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    /><CardProduk
                        namaProduk="Nama Produk"
                        ukuran="12X12X12"
                        deskripsi="Booth dengan bahan kayu premium dan kualitas tinggi"
                        harga="Rp. 100.000"
                        gambar="/images/booth2.png"
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </div>
            </div>
        </div>
    );
}

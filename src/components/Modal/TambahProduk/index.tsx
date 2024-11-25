import React from "react";

interface ModaltambahprodukProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void; // opsional
}

const Modaltambahproduk: React.FC<ModaltambahprodukProps> = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-md p-6 animate-popup bg-white rounded-lg shadow-lg">
                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ×
                </button>
                <h2 className="text-xl font-semibold text-center text-green-700 mb-4">
                    Tambah Produk
                </h2>
                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (onSubmit) onSubmit();
                    }}
                >
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
                            rows={3}
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
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        console.log("File yang diunggah:", file);
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
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
    );
};

export default Modaltambahproduk;

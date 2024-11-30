import { useState } from "react";

export default function Register() {
    // State untuk menyimpan input dari pengguna
    const [nama, setNama] = useState("");
    const [noHp, setNoHp] = useState("");
    const [password, setPassword] = useState("");

    // State untuk menampilkan modal dan pesan error
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    // Fungsi validasi ketika tombol Register ditekan
    const handleRegister = () => {
        // Validasi apakah semua field sudah diisi
        if (!nama || !noHp || !password) {
            setModalMessage("Semua field harus diisi");
            setIsModalOpen(true); // Buka modal dengan pesan kesalahan
            return;
        }

        // Validasi nomor HP (minimal 10 angka)
        if (noHp.length < 11) {
            setModalMessage("Nomor HP tidak valid");
            setIsModalOpen(true); // Buka modal dengan pesan kesalahan
            return;
        }

        // Jika validasi lolos
        setModalMessage("Registrasi berhasil!");
        setIsModalOpen(true); // Buka modal dengan pesan sukses
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen bg-primary p-6 items-center justify-center flex">
            <div className="flex flex-col w-full bg-white items-center rounded-2xl md:w-2/6 border gap-4 border-abu2 p-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-black">Register</h1>
                    <p className="text-abu text-sm">Silahkan isi form dibawah</p>
                </div>
                <div className="w-full flex items-center flex-col">
                    <input
                        type="text"
                        placeholder="Nama"
                        className="border text-black border-abu2 w-full rounded-lg p-2 mb-4"
                        value={nama}
                        required
                        onChange={(e) => setNama(e.target.value)} // Update state nama
                    />
                    <input
                        type="tel"
                        placeholder="NO HP"
                        className="border text-black border-abu2 w-full rounded-lg p-2 mb-4"
                        maxLength={13}
                        minLength={11}
                        value={noHp}
                        required
                        autoComplete="tel"
                        onChange={(e) => setNoHp(e.target.value.replace(/[^0-9]/g, ''))} // Hanya angka yang bisa diinput
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border text-black w-full border-gray-300 rounded-lg p-2 mb-4"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)} // Update state password
                    />
                </div>
                <button
                    className="bg-unik text-white py-2 px-4 w-full rounded-md"
                    onClick={handleRegister}
                >
                    Register
                </button>
                <div className="text-black text-sm">Sudah punya akun? <button className="text-unik">Login di sini</button></div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 animate-popup max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4 text-black">Informasi</h2>
                        <p className="text-black">{modalMessage}</p>
                        <button
                            className="mt-4 bg-unik text-white py-2 px-4 rounded-md"
                            onClick={closeModal}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

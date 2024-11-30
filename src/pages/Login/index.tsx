import React, { useState } from 'react';

export default function Login() {
    // State untuk nomor HP, password, dan error messages
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Dummy data untuk validasi
    const dummyPhoneNumber = '081234567890';
    const dummyPassword = 'password123';

    // Fungsi untuk menangani perubahan input NO HP
    const handlePhoneNumberChange = (e) => {
        // Menghapus karakter selain angka
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
    };

    // Fungsi untuk menangani login
    const handleLogin = () => {
        // Validasi nomor HP (minimal 11 angka dan maksimal 13 angka)
        if (phoneNumber.length < 11 || phoneNumber.length > 13) {
            setErrorMessage('Nomor HP Tidak Valid.');
            return;
        }

        // Validasi password
        if (password !== dummyPassword) {
            setErrorMessage('Password yang Anda masukkan salah.');
            return;
        }

        // Jika nomor HP dan password benar
        if (phoneNumber === dummyPhoneNumber && password === dummyPassword) {
            alert('Login berhasil!');
            setErrorMessage(''); // Reset pesan error jika berhasil
        } else {
            setErrorMessage('Nomor HP atau sandi salah.');
        }
    };

    return (
        <div className="h-screen bg-unik2 items-center justify-center flex">
            <div className="flex flex-col bg-white items-center rounded-2xl w-2/6 border gap-4 border-abu2 p-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-black">Login</h1>
                    <p className="text-abu text-sm">Masuk ke akun anda</p>
                </div>
                <div className="w-full flex items-center flex-col">
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="NO HP"
                        className="border text-black border-gray-300 w-full rounded-lg p-2 mb-4"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border text-black w-full border-gray-300 rounded-lg p-2 mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="bg-unik text-white py-2 px-4 w-full rounded-md"
                    onClick={handleLogin}
                >
                    Login
                </button>
                {errorMessage && (
                    <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                )}
                <div className="w-full flex flex-col items-center">
                    <button className="text-unik font-medium text-sm">Lupa Password?</button>
                    <div className="text-black text-sm">Belum Punya Akun? <button className="text-unik">Daftar di sini</button></div>
                </div>
            </div>
        </div>
    );
}

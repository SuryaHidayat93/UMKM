import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    // State untuk mengontrol visibilitas menu mobile
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="h-1/6 w-full flex justify-center">
            <header className="flex items-center justify-between h-12 w-full mt-10">

                {/* Logo */}
                <div className="text-3xl text-unik font-outfit font-black">Warung UMKM Riau</div>

                {/* Menu Navigasi untuk Desktop */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-unik">Beranda</Link>
                    <Link href="#" className="text-gray-600 hover:text-unik">Produk</Link>
                    <Link href="#" className="text-gray-600 hover:text-unik">Layanan</Link>
                    <Link href="#" className="text-gray-600 hover:text-unik">Tentang</Link>
                    <Link href="#" className="text-gray-600 hover:text-unik">Kontak</Link>
                </nav>

                {/* Tombol untuk Mobile (ikon hamburger) */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-unik focus:outline-none">
                        {/* Ikon hamburger menggunakan SVG */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Tombol Daftar dan Login untuk Desktop */}
                <div className="hidden md:flex space-x-4">
                    <button className="text-unik h-12 w-36 border rounded-xl border-gray-300 shadow-md hover:border-unik duration-300 ease-in-out">Daftar</button>
                    <button className="text-white bg-unik rounded-xl h-12 w-36">Login</button>
                </div>
            </header>

            {/* Menu Mobile */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-slate-700 bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-4">
                    <Link href="#" className="text-white text-lg hover:text-unik">Beranda</Link>
                    <Link href="#" className="text-white text-lg hover:text-unik">Produk</Link>
                    <Link href="#" className="text-white text-lg hover:text-unik">Layanan</Link>
                    <Link href="#" className="text-white text-lg hover:text-unik">Tentang</Link>
                    <Link href="#" className="text-white text-lg hover:text-unik">Kontak</Link>
                    <button className="text-unik h-12 w-36 border rounded-xl border-gray-300 shadow-md hover:border-unik duration-300 ease-in-out">Daftar</button>
                    <button className="text-white bg-unik rounded-xl h-12 w-36">Login</button>
                </div>
            )}
        </div>
    );
}

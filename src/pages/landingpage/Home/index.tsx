import Image from 'next/image';

interface HomeProps {
    className?: string; // Properti opsional
}

export default function Home({ className }: HomeProps) {
    return (
        <div
            className={`flex flex-col md:flex-row ${className} px-4 md:px-1 space-y-6 md:space-y-0 md:space-x-10 h-auto md:h-screen`}
        >
            {/* Teks dan Tombol */}
            <div className="w-full md:w-1/2 h-full flex flex-col space-y-6 justify-center">
                {/* Heading */}
                <div className="h-auto md:h-auto flex items-start justify-start">
                    <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-snug">
                        Dukung <span className="text-unik">Usaha UMKM</span> dengan Akses Mudah ke <span className="text-unik">Barang dan Peralatan Berkualitas!</span>
                    </p>
                </div>

                {/* Subheading & Tombol */}
                <div className="space-y-4">
                    <p className="text-md sm:text-lg md:text-xl w-full md:w-4/5 text-black leading-relaxed">
                        Menyediakan berbagai barang dan peralatan UMKM berkualitas yang bisa dibeli atau disewa dengan mudah...
                    </p>
                    <div className="flex items-center justify-start space-x-4">
                        <button className="h-12 w-36 bg-unik rounded-3xl">Produk Kami</button>
                        <button className="h-12 w-36 border border-gray-300 rounded-3xl hover:border-unik duration-300 ease-in-out text-unik">
                            Layanan Kami
                        </button>
                    </div>
                </div>
            </div>

            {/* Gambar */}
            <div className="hidden md:flex w-full md:w-1/2 h-full justify-center items-center">
                <Image
                    className="bg-none md:w-2/3 md:h-2/3"
                    src="/images/booth2.png"
                    alt="Gambar"
                    width={340}
                    height={240}
                />
            </div>
        </div>
    );
}

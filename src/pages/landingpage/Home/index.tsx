
import Image from 'next/image';
interface HomeProps {
    className?: string; // Properti opsional
}

export default function Home({ className }: HomeProps) {
    return (
        <div className={`flex ${className}`}>
            <div className="w-1/2 h-full flex-col ">
                <div className="h-3/6  flex items-center justify-start">
                    <p className="font-bold text-5xl text-black">Dukung <span className="text-unik">Usaha UMKM</span> dengan Akses Mudah ke <span className="text-unik">Barang dan Peralatan Berkualitas!</span></p>
                </div>
                <div className="h-2/6   items-start justify-start">
                    <p className="text-xl w-4/5 h-2/4  text-black">Menyediakan berbagai barang dan peralatan UMKM  berkualitas yang bisa dibeli atau disewa dengan mudah...</p>
                    <div className=" h-2/4 w-full flex items-center justify-center">
                        <div className="w-4/6 h-4/6  flex space-x-4 items-center justify-between">
                            <button className="h-full w-6/12 bg-unik rounded-3xl">Produk Kami</button>
                            <button className="h-full w-6/12 border border-gray-300 rounded-3xl hover:border-unik duration-300 ease-in-out text-unik">Layanan Kami</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <Image className='bg-none'
                    src="/images/booth2.png"
                    alt="Gambar"
                    width={440}
                    height={300}
                />
            </div>
        </div>
    );
}

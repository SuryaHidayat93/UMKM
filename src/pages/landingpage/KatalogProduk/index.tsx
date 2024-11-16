import Image from 'next/image';
export default function KatalogProduk() {
    return (
        <div className=" bg-slate-500 md:px-1 px-4">
            {/* Bagian Header */}
            <div className="flex flex-col items-start h-2/6 w-full bg-slate-300">
                <h1 className="text-2xl font-semibold text-black">Katalog Produk</h1>
                <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-96">
                    <p className="text-black">
                        Kami membuat produk yang berkualitas dengan harga yang terjangkau
                    </p>
                    <div className="flex justify-center items-center w-full md:w-0">
                        <button className="text-unik md:border flex flex-row items-center hover:bg-unik duration-300 ease-in-out hover:text-white  md:border-unik rounded-3xl px-4 py-2">
                            Selengkapnya
                            <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bagian Card dalam div hitam */}
            <div className="flex flex-col bg-black h-4/6 w-full">
                <div className="grid grid-cols-2 bg-slate-200 h-full lg:grid-cols-4 gap-4 ">
                    {/* Card 1 */}
                    <div className="border rounded-lg p-4 h-full bg-white shadow-md">
                        <h2 className="font-bold text-lg">Nama Produk</h2>
                        <p className="text-sm text-gray-500">Ukuran</p>
                        {/* Tambahkan gambar */}
                        <Image className="bg-none"
                            src="/images/booth2.png"
                            alt="Gambar"
                            width={340}
                            height={240}
                        />
                        <p className="text-gray-500">Deskripsi</p>
                        <p className="font-semibold text-black">Harga:</p>
                    </div>
                    {/* Card 2 */}
                    <div className="border rounded-lg p-4 bg-white shadow-md">
                        <h2 className="font-bold text-lg">Nama Produk</h2>
                        <p className="text-sm text-gray-500">Ukuran</p>
                        <Image className="bg-none"
                            src="/images/meja.jpg"
                            alt="Gambar"
                            width={340}
                            height={240}
                        />
                        <p className="text-gray-500">Deskripsi</p>
                        <p className="font-semibold text-black">Harga:</p>
                    </div>
                    {/* Card 3 */}
                    <div className="border rounded-lg p-4 bg-white shadow-md">
                        <h2 className="font-bold text-lg">Nama Produk</h2>
                        <p className="text-sm text-gray-500">Ukuran</p>
                        <Image className="bg-none"
                            src="/images/booth2.png"
                            alt="Gambar"
                            width={340}
                            height={240}
                        />
                        <p className="text-gray-500">Deskripsi</p>
                        <p className="font-semibold text-black">Harga:</p>
                    </div>
                    {/* Card 4 */}
                    <div className="border rounded-lg p-4 bg-white shadow-md">
                        <h2 className="font-bold text-lg">Nama Produk</h2>
                        <p className="text-sm text-gray-500">Ukuran</p>
                        <Image className="bg-none"
                            src="/images/booth2.png"
                            alt="Gambar"
                            width={340}
                            height={240}
                        />
                        <p className="text-gray-500">Deskripsi</p>
                        <p className="font-semibold text-black">Harga:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

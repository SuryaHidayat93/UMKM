import Image from "next/image";
export default function LayananKami1() {
    return (
        <div className="px-4 h-screen md:px-1">
            <div className="items-center justify-center md:items-start flex flex-col w-full">
                <h1 className="text-2xl font-semibold text-black">
                    Apa saja layanan kami?
                </h1>
                <p className="text-black text-center md:text-start">Kami menawarkan produk dengan menyediakan opsi transaksi penyewaan serta pembelian yang dapat dilakukan secara cash maupun kredit.</p>
            </div>
            <div className="flex flex-col w-full h-5/6 items-center">
                <div className="grid grid-cols-1 gap-4 md:gap-32 md:grid-cols-3 md:py-10 h-full w-full  p-10">
                    <button className="rounded-3xl p-6 items-center justify-center flex flex-col gap-1 md:gap-4 bg-white shadow-xl">
                        <Image className="bg-none md:w-24   md:h-24"
                            src="/images/cash.png"
                            alt="Gambar"
                            width={50}
                            height={50}
                        />
                        <h2 className="font-bold text-xl text-black md:text-3xl">Cash</h2>
                        <p className="text-black text-center">Pembayaran langsung secara lunas</p>
                    </button>
                    <button className="rounded-3xl p-6 items-center justify-center flex flex-col gap-1 md:gap-4 bg-white shadow-xl">
                        <Image className="bg-none md:w-24   md:h-24"
                            src="/images/kredit.png"
                            alt="Gambar"
                            width={50}
                            height={50}

                        />
                        <h2 className="font-bold text-xl text-black md:text-3xl">Kredit</h2>
                        <p className="text-black text-center">Pembayaran dengan uang muka serta cicilan hingga 5x</p>
                    </button>
                    <button className="rounded-3xl p-6 items-center justify-center flex flex-col gap-1 md:gap-4 bg-white shadow-xl">
                        <Image className="bg-none md:w-24 md:ml-5 ml-4  md:h-24"
                            src="/images/sewa.png"
                            alt="Gambar"
                            width={50}
                            height={50}
                        />
                        <h2 className="font-bold text-xl text-black md:text-3xl">Sewa</h2>
                        <p className="text-black text-center">Penyewaan booth</p>
                    </button>




                </div>
            </div>
        </div>
    );
}
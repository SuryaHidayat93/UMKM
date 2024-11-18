export default function Tentangkami() {
    return (
        <div className="h-full w-full bg-slate-300 flex flex-col gap-10 p-6">
            <h1 className="text-2xl font-semibold text-black text-center">Tentang Kami</h1>
            <div className="w-full flex justify-center">
                {/* Kontainer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-[auto_auto] lg:grid-cols-3 gap-4 lg:gap-6 w-full lg:w-3/4">
                    {/* Card 1 */}
                    <div className="rounded-2xl bg-white shadow-md p-6 lg:col-span-3 lg:justify-self-center">
                        <h2 className="text-lg font-bold text-black">Card 1</h2>
                        <p className="text-sm text-gray-600">Deskripsi card pertama.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-2xl bg-white shadow-md p-6">
                        <h2 className="text-lg font-bold text-black">Card 2</h2>
                        <p className="text-sm text-gray-600">Deskripsi card kedua.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-2xl bg-white shadow-md p-6">
                        <h2 className="text-lg font-bold text-black">Card 3</h2>
                        <p className="text-sm text-gray-600">Deskripsi card ketiga.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

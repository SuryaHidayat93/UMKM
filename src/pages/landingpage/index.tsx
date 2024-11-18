import Navbar from "@/components/navbar/index";
import Home from "@/pages/landingpage/Home";
import KatalogProduk from "./KatalogProduk";
import LayananKami1 from "./LayananKami1";
import Tentangkami from "./Tentangkami";


export default function Landingpage() {
    const showKatalogProduk = true; // Ubah sesuai kebutuhan
    const showLayananKami1 = true; // Ubah sesuai kebutuhan

    return (
        <div className="flex justify-center min-h-screen bg-primary px-1 md:px-0">
            <div className="flex flex-col h-auto w-full gap-1 md:w-11/12 space-y-6 md:space-y-10 bg-slate-500 overflow-y-auto">
                <Navbar />

                <div className="h-screen">
                    <Home className="h-full" />
                </div>

                {showKatalogProduk && <KatalogProduk />}

                {showLayananKami1 && <LayananKami1 />}
                <Tentangkami />
            </div>
        </div>
    );
}

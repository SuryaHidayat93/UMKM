import Navbar from "@/components/navbar/index";
import Home from "@/pages/landingpage/Home";
import KatalogProduk from "@/pages/landingpage/KatalogProduk";
import LayananKami1 from "./LayananKami1";
import Tentangkami from "./Tentangkami";


export default function Landingpage() {
    const showKatalogProduk = true;
    const showLayananKami1 = true;

    return (
        <div className="flex justify-center min-h-screen bg-primary px-2">
            <div className="flex flex-col h-auto w-full gap-5 md:w-11/12 space-y-4  overflow-y-auto">
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

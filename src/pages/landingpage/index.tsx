import Navbar from "@/components/navbar/index";
import Home from "@/pages/landingpage/Home";
import KatalogProduk from "./KatalogProduk";


export default function Landingpage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-primary px-1 md:px-0">
            <div className="flex bg-slate-400 flex-col h-screen w-full md:w-11/12 space-y-6 md:space-y-10 overflow-y-auto">
                <Navbar />
                <Home className="flex-1" />
                <KatalogProduk />
            </div>
        </div>
    );
}


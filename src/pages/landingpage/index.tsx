import Navbar from "@/components/navbar/index";
import Home from "@/pages/landingpage/Home";


export default function Landingpage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-primary">
            {/* Div Kedua */}
            <div className="flex flex-col h-[calc(100vh-32px)] w-11/12 ">
                <Navbar />
                <Home className="flex-1 justify-between " />
            </div>
        </div>
    );
}

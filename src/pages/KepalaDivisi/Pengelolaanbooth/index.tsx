import Navbar from "@/components/navbar/navbarKD";
import React from "react";
import BoothCard from "@/components/Card/Kadiv/Booth";
export default function Pengelolaanbooth() {
    return (

        <div className="h-screen bg-primary w-full pb-32 overflow-auto">
            <Navbar isHamburger title="Pengelolaan Booth" />
            <div className="h-full w-full grid grid-cols-1 p-6 md:px-20 md:grid-cols-3 gap-4 md:gap-8 place-items-center">
                <BoothCard boothName="Booth 1"
                    initialPenyewa="dupa"
                    initialKerusakan="Tidak ada"
                    initialStatus="terisi" />
                <BoothCard boothName="Booth 2"
                    initialPenyewa="Jane Smith"
                    initialKerusakan="Tidak ada"
                    initialStatus="terisi" />
                <BoothCard boothName="Booth 2"
                    initialPenyewa="Jane Smith"
                    initialKerusakan="Tidak ada"
                    initialStatus="terisi" />
                <BoothCard boothName="Booth 2"
                    initialPenyewa="Jane Smith"
                    initialKerusakan="Tidak ada"
                    initialStatus="terisi" />
                <BoothCard boothName="Booth 2"
                    initialPenyewa=""
                    initialKerusakan="Tidak ada"
                    initialStatus="rusak" />
                <BoothCard boothName="Booth 2"
                    initialPenyewa="Jane Smith"
                    initialKerusakan="Tidak ada"
                    initialStatus="terisi" />

            </div>

        </div>
    );
}
import Navbar from "@/components/navbar/navbarKD";
import CardPermintaanSewa from "@/components/Card/Kadiv/PermintaanSewa";
import ModalInformasiPelanggan from "@/components/Modal/InformasiPelanggan";
import { useState } from "react";


export default function Permintaanpenyewaan() {
    const [isModalPermintaanPenyewaanOpen, setisModalPermintaanPenyewaanOpen] = useState(false);

    const openModalPermintaanPenyewaan = () => setisModalPermintaanPenyewaanOpen(true);
    const closeModalPermintaanPenyewaan = () => setisModalPermintaanPenyewaanOpen(false);

    const dataPelanggan = {
        nama: "John Doe",
        noHp: "081234567890",
        alamatDomisili: "Jl. Kebon Jeruk No. 123",
        nik: "1234567890123456",
        alamatKtp: "Jl. Mangga Dua No. 45",
        jenisKelamin: "Laki-laki",
        awalPenyewaan: "2024-11-25",
        akhirPenyewaan: "2024-12-01",
        rencanaLokasiBooth: "Plaza Indonesia, Jakarta",
    }

    return (
        <div className="h-screen w-full overflow-y-auto bg-primary">
            <Navbar isHamburger title="Permintaan Penyewaan" />
            <ModalInformasiPelanggan
                isOpen={isModalPermintaanPenyewaanOpen}
                data={dataPelanggan}
                onClose={closeModalPermintaanPenyewaan}
                submit={() => { }} />

            <div className="w-full grid grid-cols-1 md:grid-cols-3 pb-20 gap-y-6 gap-x-8 md:px-20 place-items-center">
                <CardPermintaanSewa Nama="Abduk" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { openModalPermintaanPenyewaan() }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
            </div>

            { }

        </div>
    );
}

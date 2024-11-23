import Navbar from "@/components/navbar/navbarKD";
import CardPermintaanSewa from "@/components/Card/Kadiv/PermintaanSewa";
export default function Permintaanpenyewaan() {
    return (
        <div className="h-screen w-full overflow-y-auto bg-primary">
            <Navbar isHamburger title="Permintaan Penyewaan" />
            <div className="w-full grid grid-cols-1 md:grid-cols-3 pb-20 gap-4 md:px-20 place-items-center">
                <CardPermintaanSewa Nama="Abduk" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />
                <CardPermintaanSewa Nama="Card 1" Alamat="Alamat 1" Tanggal={new Date()} Detail={() => { }} />

            </div>
        </div>
    );
}
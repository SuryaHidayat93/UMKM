import Navbar from "@/components/navbar/navbarKD";
import CardDashboard from "@/components/Card/Kadiv/Dashboard";  // adjust based on the actual path

export default function Dashboard() {
    return (
        <div className="h-screen bg-primary w-full overflow-auto">
            <Navbar title="Dashboard" />
            <div className="h-full w-full grid grid-cols-1 md:px-20 md:grid-cols-2 gap-4 md:gap-8 place-items-center">

                <CardDashboard imageSrc="/images/book.png" title="Data Transaksi" description="Akses cepat ke data transaksi"></CardDashboard>
                <CardDashboard imageSrc="/images/book.png" title="Data Transaksi" description="Akses cepat ke data transaksi"></CardDashboard>
                <CardDashboard imageSrc="/images/book.png" title="Data Transaksi" description="Akses cepat ke data transaksi"></CardDashboard>
                <CardDashboard imageSrc="/images/book.png" title="Data Transaksi" description="Akses cepat ke data transaksi"></CardDashboard>
                <CardDashboard imageSrc="/images/book.png" title="Data Transaksi" description="Akses cepat ke data transaksi"></CardDashboard>

            </div>
        </div>
    );
}

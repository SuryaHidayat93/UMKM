"user client";

interface CardPermintaanSewaProps {
    Nama: string;
    Alamat: string;
    Tanggal: Date;
    Detail: () => void;
}

export default function CardPermintaanSewa(props: CardPermintaanSewaProps) {
    return (
        <div className="bg-white w-5/6 rounded-2xl gap-6 shadow-md p-6 flex flex-col">
            <h1 className="text-unik text-2xl font-bold">{props.Nama}</h1>
            <div>
                <p className="text-black">Alamat: {props.Alamat}</p>
                <p className="text-black">Tanggal Permintaan:</p>
            </div>
            <div className="w-full flex items-center justify-center">
                <button
                    onClick={props.Detail}
                    className="w-full p-1 items-center flex justify-center text-unik hover:text-white bg-white rounded-lg border border-unik hover:border-white hover:bg-unik duration-300 ease-in-out"
                >
                    Detail
                </button>
            </div>
        </div>
    );
}
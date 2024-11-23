import React from 'react';

const CardDashboard = ({
    imageSrc = '',
    title = 'Default Title',
    description = 'Default Description',

}) => {
    return (
        <button
            className="w-5/6 shadow-lg flex flex-col rounded-3xl h-52 bg-white hover:shadow-xl transition transform hover:scale-105"
            onClick={() => console.log('Card clicked!')}
        >
            <div className="flex justify-between h-1/2 w-full">
                {/* Bagian kiri dengan ikon */}
                <div className="flex items-center ml-8">
                    <div className="bg-unik2 rounded-full p-2">
                        <img src={imageSrc} alt={title} className="w-8 h-8" />
                    </div>
                </div>
                {/* Bagian kanan dengan teks */}
                <div className="flex items-center mr-8">
                    <p className="text-unik font-semibold text-black">Lihat Semua</p>
                </div>
            </div>

            {/* Bagian konten teks (judul dan deskripsi) */}
            <div className="px-8 py-4  flex flex-col items-start">
                <h1 className="text-xl font-bold text-black">{title}</h1>
                <p className="text-abu">{description}</p>
            </div>
        </button>
    );
};

export default CardDashboard;

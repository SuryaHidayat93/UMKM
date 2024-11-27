export default function Login() {
    return (
        <div className="h-screen bg-unik2 items-center justify-center flex">
            <div className="flex flex-col bg-white items-center rounded-2xl w-2/6 border gap-4 border-abu2 p-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-black">Login</h1>
                    <p className="text-abu text-sm">Masuk ke akun anda</p>
                </div>
                <div className="w-full flex items-center flex-col">
                    <input type="email" placeholder="NO HP" className="border border-gray-300 w-full rounded-lg p-2 mb-4" />
                    <input type="password" placeholder="Password" className="border w-full border-gray-300 rounded-lg p-2 mb-4" />
                </div>
                <button className="bg-unik text-white py-2 px-4 w-full rounded-md">Login</button>
                <div className="w-full flex flex-col items-center">
                    <button className="text-unik font-medium text-sm">Lupa Password?</button>
                    <div className="text-black text-sm ">Belum Punya Akun? <button className="text-unik">Daftar di sini</button></div>
                </div>
            </div>
        </div>


    )
}
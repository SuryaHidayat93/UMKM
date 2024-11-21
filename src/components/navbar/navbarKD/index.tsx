"use client";

import { useState } from "react";

interface NavbarProps {
    isHamburger?: boolean;
    title: string; // Menentukan judul yang akan ditampilkan
}

const Navbar: React.FC<NavbarProps> = ({ isHamburger = false, title }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

    return (
        <nav className="bg-primary text-green px-6 py-8">
            <div className=" mx-auto md:mr-1 md:ml-1 flex items-center justify-between gap-4">
                {/* Hamburger Menu dan Title */}
                {isHamburger ? (
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleHamburger}
                            className="flex items-center focus:outline-none"
                        >
                            <img
                                src="/images/hamburger.png"
                                alt="Hamburger Menu"
                                className="h-6 w-6"
                            />
                        </button>
                        <div className="text-2xl text-unik font-bold">{title}</div>
                        {hamburgerOpen && (
                            <div className="absolute left-0 mt-2 bg-foreground text-black rounded-md shadow-lg w-48 border-2">
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                                    Menu Item 1
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                                    Menu Item 2
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Judul untuk mode non-Hamburger
                    <div className="text-2xl text-unik font-bold">{title}</div>
                )}

                {/* User Account */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 focus:outline-none"
                    >
                        <div className="text-lg text-black font-medium">Kepala Divisi</div>
                        <img src="/images/arrowdown.png" alt="Arrow Down" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 bg-foreground text-black rounded-md shadow-lg w-48 border-2">
                            <button
                                onClick={() => alert("Logged out")}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

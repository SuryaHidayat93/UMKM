import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import Link from 'next/link';

interface FormErrors {
    nama?: string;
    noHp?: string;
    password?: string;
}

export default function RegisterForm() {
    const [nama, setNama] = useState("");
    const [noHp, setNoHp] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!nama.trim()) {
            newErrors.nama = "Nama harus diisi";
        }

        if (noHp.length < 11 || noHp.length > 13) {
            newErrors.noHp = "Nomor HP harus antara 11 dan 13 digit";
        }

        if (password.length < 8) {
            newErrors.password = "Password minimal 8 karakter";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log({ nama, noHp, password });
            setModalMessage("Registrasi berhasil!");
            setIsModalOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-unik2 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-black">Register</h1>
                        <p className="text-sm text-gray-600">Silahkan isi form dibawah</p>
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">
                            Nama
                        </Label>
                        <Input
                            id="nama"
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="w-full"
                        />
                        {errors.nama && <p className="text-red-500 text-xs italic">{errors.nama}</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="noHp" className="block text-gray-700 text-sm font-bold mb-2">
                            NO HP
                        </Label>
                        <Input
                            id="noHp"
                            type="tel"
                            placeholder="Contoh: 081234567890"
                            value={noHp}
                            onChange={(e) => setNoHp(e.target.value.replace(/\D/g, ''))}
                            className="w-full"
                        />
                        {errors.noHp && <p className="text-red-500 text-xs italic">{errors.noHp}</p>}
                    </div>

                    <div className="mb-6">
                        <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Masukkan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <Button type="submit" className="w-full bg-unik hover:bg-unik/90">
                            Register
                        </Button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Sudah punya akun?{' '}
                            <Link href="/login" className="text-unik font-medium hover:underline">
                                Login di sini
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Informasi</DialogTitle>
                        <DialogDescription>{modalMessage}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setIsModalOpen(false)}>Tutup</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}


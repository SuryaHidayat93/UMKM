import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from 'next/link'

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Dummy data for validation
    const dummyPhoneNumber = '081234567890';
    const dummyPassword = 'password123';

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError('');

        if (phoneNumber.length < 11 || phoneNumber.length > 13) {
            setError('Nomor HP Tidak Valid.');
            return;
        }

        if (phoneNumber === dummyPhoneNumber && password === dummyPassword) {
            alert('Login berhasil!');
        } else {
            setError('Nomor HP atau sandi salah.');
        }
    };

    return (
        <div className="min-h-screen bg-unik2 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-black">Login</h1>
                        <p className="text-sm text-gray-600">Masuk ke akun anda</p>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                            NO HP
                        </Label>
                        <Input
                            id="phoneNumber"
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Contoh: 081234567890"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className="w-full"
                            required
                        />
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
                            required
                        />
                    </div>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    <div className="flex items-center justify-between mb-6">
                        <Button type="submit" className="w-full bg-unik hover:bg-unik/90">
                            Login
                        </Button>
                    </div>
                    <div className="text-center">
                        <Link href="/forgot-password" className="text-unik text-sm font-medium hover:underline">
                            Lupa Password?
                        </Link>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Belum Punya Akun?{' '}
                            <Link href="/register" className="text-unik font-medium hover:underline">
                                Daftar di sini
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}


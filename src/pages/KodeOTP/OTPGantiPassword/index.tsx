import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

export default function OTPGantiPassword() {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const [resendCountdown, setResendCountdown] = useState(30);

    const dummyOtp = '123456';

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isResendDisabled) {
            interval = setInterval(() => {
                setResendCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsResendDisabled(false);
                        return 30;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isResendDisabled]);

    const handleConfirm = () => {
        if (otp.length !== 6) {
            setErrorMessage('Kode OTP harus 6 digit.');
        } else if (otp !== dummyOtp) {
            setIsModalOpen(true);
            setErrorMessage('');
        } else {
            alert('OTP berhasil dikonfirmasi!');
            setErrorMessage('');
        }
    };

    const handleResend = () => {
        setIsResendDisabled(true);
        setResendCountdown(30);
        setOtp(''); // Clear the OTP input when resending
        console.log('Kode OTP telah dikirim ulang.');
    };

    return (
        <div className="min-h-screen bg-unik2 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="bg-white flex flex-col items-center shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-black">Daftar Akun</h1>
                        <p className="text-sm text-gray-600">Masukkan OTP</p>
                    </div>
                    <div className="mb-4">
                        <InputOTP
                            value={otp}
                            onChange={setOtp}
                            maxLength={6}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    {errorMessage && (
                        <Alert variant="destructive" className="mb-4 w-full">
                            <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                    )}
                    <div className="flex flex-col gap-4 w-full">
                        <Button
                            onClick={handleConfirm}
                            className="w-full bg-unik hover:bg-unik/90"
                            disabled={otp.length !== 6}
                        >
                            Konfirmasi
                        </Button>
                        <Button
                            onClick={handleResend}
                            disabled={isResendDisabled}
                            variant="outline"
                            className="w-full text-black"
                        >
                            {isResendDisabled
                                ? `Kirim ulang dalam ${resendCountdown} detik`
                                : 'Kirim Ulang Kode'}
                        </Button>
                    </div>
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>OTP Salah</DialogTitle>
                        <DialogDescription>
                            Kode OTP yang Anda masukkan tidak valid. Silakan coba lagi.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setIsModalOpen(false)}>Tutup</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}


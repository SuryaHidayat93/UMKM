"use client"

import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SetPasswordBaru() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")

    const getPasswordStrength = (password: string) => {
        const minLength = 8
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumbers = /\d/.test(password)
        const hasNonalphas = /\W/.test(password)

        if (password.length < minLength) return "Weak"
        if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) return "Strong"
        if ((hasUpperCase || hasLowerCase) && hasNumbers) return "Medium"
        return "Weak"
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }
        if (getPasswordStrength(password) === "Weak") {
            setError("Password is too weak")
            return
        }
        console.log("Password reset successfully")
        setError("")
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-unik2">
            <Card className="w-full max-w-md flex flex-col items-center">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Masukkan Sandi Baru</CardTitle>
                    <CardDescription className="text-center">Masukkan Sandi Baru Anda</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} className="w-full"> {/* w-full pada form */}
                    <CardContent className="space-y-4 w-full p-4"> {/* pastikan w-full ada di sini */}
                        <div className="space-y-2 w-full"> {/* Tambahkan w-full di div */}
                            <Label htmlFor="new-password">New Password</Label>
                            <div className="relative w-full"> {/* Tambahkan w-full di div */}
                                <Input
                                    id="new-password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pr-10 w-full"
                                    placeholder="Masukkan Sandi Baru" // Tambahkan w-full di sini
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4 text-gray-500" /> : <Eye className="h-4 w-4 text-gray-500" />}
                                </button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Strength: {getPasswordStrength(password)}
                            </p>
                        </div>
                        <div className="space-y-2 w-full"> {/* Tambahkan w-full di div */}
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full" // Tambahkan w-full di sini
                            />
                        </div>
                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full bg-unik">Set New Password</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

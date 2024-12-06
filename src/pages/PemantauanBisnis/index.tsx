'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LocationMap } from '@/components/Location'
import Navbar from '@/components/navbar/navbarKD'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BoothItem } from '@/components/Card/BoothPemantauanBisnis'
import { BoothDetailModal } from '@/components/Modal/Boothdetail'

const boothData = [
    { id: "1", penyewa: "Bu Warni", lokasi: "Panam", status: "Aktif", ktpImage: "/placeholder.svg?height=200&width=320" },
    { id: "2", penyewa: "Pak Budi", lokasi: "Sukajadi", status: "Menunggak", ktpImage: "/placeholder.svg?height=200&width=320" },
    { id: "3", penyewa: "Ibu Siti", lokasi: "Marpoyan", status: "Aktif", ktpImage: "/placeholder.svg?height=200&width=320" },
    { id: "4", penyewa: "Pak Ahmad", lokasi: "Rumbai", status: "Aktif", ktpImage: "/placeholder.svg?height=200&width=320" },
    { id: "5", penyewa: "Bu Rina", lokasi: "Tampan", status: "Aktif", ktpImage: "/placeholder.svg?height=200&width=320" },
]

export default function PemantauanBisnis() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedBooth, setSelectedBooth] = useState(boothData[0])

    const handleDetailClick = (booth) => {
        setSelectedBooth(booth)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="mx-auto p-4 space-y-4 bg-unik2 h-screen overflow-y-auto pb-32">
            <Navbar isHamburger title='Pemantauan Bisnis' />
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-bold text-unik">Total Pendapatan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-unik">Rp 5.300.000</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-bold text-unik">Booth Disewakan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-unik">5</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-bold text-unik">Barang terjual</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-unik">5</p>
                    </CardContent>
                </Card>
            </div>

            <LocationMap />

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className='font-bold text-unik'>Data Penyewa Booth</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="hidden md:block">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID Booth</TableHead>
                                    <TableHead>Penyewa</TableHead>
                                    <TableHead>Lokasi</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {boothData.map((booth) => (
                                    <TableRow key={booth.id}>
                                        <TableCell>{booth.id}</TableCell>
                                        <TableCell>{booth.penyewa}</TableCell>
                                        <TableCell>{booth.lokasi}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${booth.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                }`}>
                                                {booth.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="font-bold text-unik"
                                                onClick={() => handleDetailClick(booth)}
                                            >
                                                Detail
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="md:hidden">
                        {boothData.map((booth) => (
                            <BoothItem
                                key={booth.id}
                                booth={booth}
                                onDetailClick={() => handleDetailClick(booth)}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>

            <BoothDetailModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                boothData={{ ...selectedBooth, ktpImage: selectedBooth.ktpImage }}
            />
        </div>
    )
}

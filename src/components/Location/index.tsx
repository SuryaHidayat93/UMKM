'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader } from '@googlemaps/js-api-loader'
import { LoaderIcon } from 'lucide-react'

interface Location {
    id: string
    name: string
    lat: number
    lng: number
    status: 'Aktif' | 'Menunggak'
}

// Sample booth locations data
const boothLocations: Location[] = [
    { id: '1', name: 'Bu Warni', lat: 0.4547, lng: 101.3824, status: 'Aktif' }, // Panam coordinates
    { id: '2', name: 'Booth 2', lat: 0.4637, lng: 101.3900, status: 'Menunggak' },
    { id: '3', name: 'Booth 3', lat: 0.4727, lng: 101.3850, status: 'Aktif' },
    { id: '4', name: 'Booth 4', lat: 0.4547, lng: 101.3924, status: 'Aktif' },
    { id: '5', name: 'Booth 5', lat: 0.4637, lng: 101.3800, status: 'Aktif' },
]

export function LocationMap() {
    const mapRef = useRef<HTMLDivElement>(null)
    const googleMapRef = useRef<google.maps.Map | null>(null)
    const markersRef = useRef<google.maps.Marker[]>([])

    useEffect(() => {
        const initMap = async () => {
            if (!mapRef.current) return

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
                version: 'weekly',
            });

            try {
                await loader.load();

                const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

                // Initialize map centered on Panam, Pekanbaru
                const map = new Map(mapRef.current, {
                    center: { lat: 0.4547, lng: 101.3824 },
                    zoom: 14,
                    styles: [
                        {
                            featureType: 'poi',
                            elementType: 'labels',
                            stylers: [{ visibility: 'off' }],
                        },
                    ],
                });

                googleMapRef.current = map;

                // Add markers for each booth location
                boothLocations.forEach((location) => {
                    const marker = new google.maps.Marker({
                        position: { lat: location.lat, lng: location.lng },
                        map,
                        title: location.name,
                        icon: {
                            url: location.status === 'Aktif'
                                ? '/marker-active.svg'
                                : '/marker-inactive.svg',
                            scaledSize: new google.maps.Size(30, 30),
                        },
                    });

                    // Add info window for each marker
                    const infoWindow = new google.maps.InfoWindow({
                        content: `
              <div class="p-2">
                <h3 class="font-semibold">${location.name}</h3>
                <p class="text-sm">Status: ${location.status}</p>
              </div>
            `,
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });

                    markersRef.current.push(marker);
                });
            } catch (error) {
                console.error('Error loading Google Maps:', error);
            }
        };

        initMap()

        return () => {
            // Cleanup markers when component unmounts
            markersRef.current.forEach(marker => marker.setMap(null))
        }
    }, [])

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className='font-bold text-unik'>Lokasi Barang di Sewa</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                    <div ref={mapRef} className="w-full h-full" />
                    {!googleMapRef.current && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                            <LoaderIcon className="w-6 h-6 animate-spin" />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}


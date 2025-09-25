import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zaman Tyres Trader - Best Tire Shop in Wah Cantt',
    short_name: 'Zaman Tyres',
    description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services. 90+ tire brands available.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nom de ton application',
    short_name: 'Nom court',
    description: 'Description de ton application',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/search.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  }
}

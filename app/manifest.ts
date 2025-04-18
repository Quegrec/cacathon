// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Re_act: Parce que réparer, c’est agir.',
    short_name: 'Re_act',
    description: 'Ici on agit pour réparer (vos vetements comme la planete)!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/image.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  }
}

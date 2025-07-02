// lib/seo.ts
type GenerateSeoProps = {
  title?: string
  description?: string
  url?: string
  image?: {
    url: string
    alt?: string
  }
  keywords?: string[]
}

export function generateMetadata({
  title = 'Minyak, Telur, Beras Murah | Agen Sembako Sidoarjo Surabaya',
  description = 'Agen sembako murah & terpercaya. Tersedia beras, telur, minyak, gula, dan kebutuhan pokok lainnya. Restock rutin & siap kirim setiap hari!',
  url = 'https://sembako-murah-pakaji.my.id',
//   image = {
//     url: 'https://namabrand.com/og-image.jpg',
//     alt: 'Jasa Website UMKM',
//   },
  keywords = ['sembako murah', 'telur murah', 'telor murah', 'agen telur', 'agen telor', 'agen beras', 'agen minyak', 'minyak kita', 'minyak murah sidoarjo', 'minyak murah surabaya', 'beras murah sidoarjo', 'beras murah surabaya']
}: GenerateSeoProps = {}) {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://sembako-murah-pakaji.my.id'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'sembakoMurahPakAji',
    //   images: [
    //     {
    //       url: image.url,
    //       alt: image.alt || title,
    //     },
    //   ],
      type: 'website',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image.url],
    // },
    robots: {
      index: true,
      follow: true,
    },
  }
}

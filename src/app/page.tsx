import Navbar from "@/components/ui/navbar";
import HeaderBod from "@/components/tab/header";
import Section from "@/components/tab/section";
import Footer from "@/components/tab/footer";
import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata({
  title: 'Minyak, Telur, Beras Murah | Agen Sembako Sidoarjo Surabaya',
  description: 'Agen sembako murah & terpercaya. Tersedia beras, telur, minyak, gula, dan kebutuhan pokok lainnya. Restock rutin & siap kirim setiap hari!',
  url: 'https://sembako-murah-pakaji.my.id',
  // image: {
  //   url: 'https://namabrand.com/og-home.jpg',
  //   alt: 'Landing Page NamaBrand'
  // },
  keywords: ['sembako murah', 'telur murah', 'telor murah', 'agen telur', 'agen telor', 'agen beras', 'agen minyak', 'minyak kita', 'minyak murah sidoarjo', 'minyak murah surabaya', 'beras murah sidoarjo', 'beras murah surabaya']
})

export default function Home() {
  return (
    <div className="bg-[#2A323F]">
      <header>
        <Navbar/>
      </header>
      <main>
        <HeaderBod/>
        <Section/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

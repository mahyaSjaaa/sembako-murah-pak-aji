'use client'
import { poppinsSB, poppins } from '@/fonts/font'

export default function HeaderBod () {
    return (
        <div id="home" className="shadow-xl/30 w-full h-screen bg-[url(/bgr.png)] bg-cover bg-no-repeat rounded-b-lg block flex items-center">          
            <div className="w-full block sm:w-full md:w-full lg:px-20">
                <h1 className={`text-[#2A323F] ${poppinsSB.className} mx-5 lg:text-[40px] md:text-[32px] sm:text-[24px] flex justify-center text-center text-[16px]`}>Tempat Belanja Sembako Terbaik – Untuk Rumah Tangga & Warung</h1>
                {/* <p className={`sm:flex sm:items-center sm:justify-center text-[#FFF9EF] lg:flex lg:items-center md:flex md:items-center md:justify-center lg:justify-between ${poppinsSB.className} sm:text-[30px] md:text-[32px] lg:text-[40px] pb-10 flex justify-center text-[16px]`}>Kebutuhan Bisnis Anda</p> */}
                <div className="flex justify-center mt-8">
                    <a href="https://wa.me/6281999885873" className={`transition hover:scale-103 duration-300 ease-in-out text-[#FEEF4C] ${poppins.className} sm:px-20 px-5 md:px-25 lg:px-30 rounded-lg sm:py-2 md:py-2 lg:py-3 bg-gradient-to-r from-[#1A131A] to-[#413738] mr-5 lg:text-[16px] sm:text-[14px] md:text-[14px] text-[12px] px-2 py-2`}>
                    Pesan Sekarang!
                    </a>
                    <a href="#product" className={`md:py-2 sm:py-2 md:px-31 sm:px-26 px-8 lg:text-[16px] md:text-[14px] sm:text-[14px] transition hover:scale-103 duration-300 ease-in-out text-[#2A323F] ${poppins.className} lg:px-36 rounded-lg lg:py-3 bg-[#FFF9EF] border border-[#1A131A] text-[12px] px-4 py-2`}>Lihat Produk!</a>
                </div>
            </div>
        </div>
    )
}
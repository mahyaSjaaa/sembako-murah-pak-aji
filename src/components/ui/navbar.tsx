'use client'
import { poppins, poppinsSB } from "@/fonts/font"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <nav className="relative z-40">
            <div className="fixed top-0 right-0 left-0">
                <div className={`${poppins.className} flex justify-between px-10 py-4 bg-[#2A323F] rounded-b-xl shadow-lg/10 border-b border-b-[#FFC813]`}>
                <p className={`${poppinsSB.className} sm:text-[15px] text-[14px] md:text-[16px] lg:text-[18px] text-[#FEEF4C] lg:mt-[2px] md:mt-[4px] sm:mt-[4px] mt-[4px]`}>
                    SembakoMurah
                </p>
                <div className="flex justify-between lg:w-120 sm:mt-1 sm:w-80 w-45 text-[#FEEF4C] lg:flex md:flex hidden">
                    <Link href="/#home" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">Home</Link>
                    <Link href="/#about" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">About</Link>
                    <Link href="/#product" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">Product</Link>
                    <Link href="/#contact" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">Contact</Link>
                </div>
                <a href="https://wa.me/6281999885873" className="sm:text-[13px] text-[13px] md:text-[16px] lg:text-[16px] transition hover:scale-105 duration-300 ease-in-out hover:from-[#6B21A8] hover:to-[#9333EA] px-5 sm:px-6 md:px-8 lg:px-8 rounded-lg pt-[3] sm:py-1 md:py-1 lg:py-1 bg-linear-65 from-[#E49313] to-[#FEEF4C] text-[#FFF9EF] text-[12px] lg:flex md:flex hidden">Pesan!</a>
                <Menu size={24} onClick={handleClick} className="mt-[2px] flex lg:hidden md:hidden" color="#FEEF4C"/>
                </div>

                <div className="relative z-50">
                <div className={`
                    fixed top-0 left-0 w-full bg-[#2A323F] text-[#FEEF4C] px-10 py-5 rounded-b-lg border-b border-b-[#FFC813]
                    ${poppins.className} text-[16px] shadow-xl/20
                    transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                `}>
                    <div className="flex justify-between mb-2">
                    <Link href="/#home">Home</Link>
                    <X onClick={handleClick} size={24} color="#FEEF4C" />
                    </div>
                    <div className="mb-2"><Link href="/#about">About</Link></div>
                    <div className="mb-2"><Link href="/#product">Product</Link></div>
                    <div className="mb-2"><Link href="/#contact">Contact</Link></div>
                    {/* <div className="mb-2 text-[#CF8A3F]"><a onClick={handleClick} href="https://wa.me/6289666823165?text=Halo%2C%20mas.%20Saya%20ingin%20memesan%20Frozen food">Pesan</a></div> */}
                </div>
                </div>
            </div>
        </nav>
    )
}
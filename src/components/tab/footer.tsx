'use client'
import { MessageCircle, MapPin } from 'lucide-react';
import { poppins, poppinsSB } from '@/fonts/font';

export default function Footer () {
  return (
    <div className="w-full bg-[#FEEF4C] rounded-t-lg pt-10 text-[#2A323F] pb-20 mt-30" id="contact">
      <p className={`${poppinsSB.className} text-[24px] text-center`}>sembakoMurah</p>

      <div
        className={`
          ${poppins.className}
          flex flex-col items-center text-center gap-6
          sm:flex-col
          md:flex-row md:justify-evenly md:items-start md:pl-60
          mt-10 px-6
        `}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <MessageCircle size={18} />
            <p>WhatsApp</p>
          </div>
          <a href="https://wa.me/6281999885873" target="_blank" rel="noopener noreferrer" className="hover:underline">
            SETYO ADJI: 0819-9988-5873
          </a>
        </div>

        <div className="space-y-2 max-w-md">
          <div className="flex items-center justify-center gap-2">
            <MapPin size={18} />
            <p>Alamat</p>
          </div>
          <a
            href="https://maps.app.goo.gl/K9CZhGuQLGq9cUda9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Jl Tropodo 1 nomor 252, Sidoarjo, Indonesia
          </a>
        </div>
      </div>
    </div>
  );
}

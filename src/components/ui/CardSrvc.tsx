import { poppins, poppinsSB } from "@/fonts/font";
import Image from "next/image";

type handleCard = {
  url: string;
  labelAatas: string;
  d1?: string;
  d2?: string;
};

export default function Cardsrvc({url, labelAatas, d1, d2}: handleCard) {
  return (
    <div className="w-[350px] max-w-full">
        <div className="group bg-[#414448] text-[#2A323F] transition ease-in-out duration-200 border border-[#FEEF4C] border-2 flex flex-col justify-between rounded-lg min-h-[500px] px-4 py-6">
            <h3 className={`${poppinsSB.className} flex justify-center text-[#FEEF4C] mb-2`}>{labelAatas}</h3>
            <div className="aspect-[16/9] w-[320px] rounded-md overflow-hidden">
                <Image
                src={url}
                alt={labelAatas}
                className="w-full object-cover"
                width={1920} // sesuaikan dengan lebar asli gambar
                height={600} // sesuaikan dengan tinggi asli gambar
                />
            </div>
            <div className="my-3">
                <p className={`${poppins.className} text-[#FEEF4C]`}>
                {d1}
                </p>
                <p className={`${poppins.className} text-[#FEEF4C]`}>
                {d2}
                </p>
            </div>
            <div className="flex justify-center">
                <a href="https://wa.me/6281999885873">
                    <button className={`${poppins.className} px-25 py-2 bg-[#FEEF4C] hover:scale-103 transition ease-in-out duration-200 rounded-md`}>
                        Hubungi Kami
                    </button>
                </a>
            </div>
        </div>
    </div>

  );
}

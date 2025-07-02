import { poppins, poppinsSB } from "@/fonts/font";
import Image from "next/image";

type handleCard = {
  url: string;
  labelAatas: string;
  harga?: string;
  d1?: string;
  d2?: string;
};

export default function CardDok({url, labelAatas, d1}: handleCard) {
  return (
    <div className="w-[350px] max-w-full">
        <div className="group bg-[#414448] text-[#2A323F] transition ease-in-out duration-200 border border-[#FEEF4C] border-2 flex flex-col justify-between rounded-lg min-h-[500px] px-4 py-6">
            <h3 className={`${poppinsSB.className} flex justify-center text-[#FEEF4C] mb-2`}>{labelAatas}</h3>
            <div className="aspect-[16/9] w-[320px] rounded-md overflow-hidden">
            <Image
            src={url}
            alt={labelAatas}
            className="w-full object-cover"
            width={320} // sesuaikan dengan lebar asli gambar
            height={320} // sesuaikan dengan tinggi asli gambar
            />
            </div>
            <p className={`list-disc ${poppins.className} text-[#FEEF4C] my-4`}>
                {d1}
            </p>
        </div>
    </div>

  );
}

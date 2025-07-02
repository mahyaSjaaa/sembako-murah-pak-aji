'use client'
import { poppins, poppinsSB } from "@/fonts/font"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cardsrvc from "../ui/CardSrvc";
import {motion} from "framer-motion"
import CardDok from "../ui/cardDok";
import Image from "next/image";

export default function Section () {
    return(
        <div className=" mt-20">
            <div className="lg:flex lg:justify-between md:block sm:block lg:gap-50 mx-5">
                <section id="about" className="flex items-center">
                    <div className="block">
                        <motion.h2 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppinsSB.className} lg:text-[24px] md:text-[20px] sm:text-[20px] text-[#FEEF4C] text-[20px]`}>Tentang Kami</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[#FEEF4C] pt-3 text-justify text-[14px]`}>Kami adalah agen sembako terpercaya yang mulai beroperasi sejak awal tahun 2025, siap melayani kebutuhan sembako Anda dengan harga grosir, kualitas terbaik, dan pelayanan yang ramah. Berawal dari semangat untuk menyediakan sembako murah dan lengkap bagi masyarakat, kami hadir sebagai solusi belanja harian yang praktis, hemat, dan bisa diandalkan.

                    Kami menyediakan berbagai kebutuhan pokok seperti beras, minyak goreng, telur, dan produk sembako lainnya. Baik untuk rumah tangga, warung, katering, maupun pelaku UMKM, kami siap jadi mitra terbaik Anda dalam memenuhi kebutuhan sembako setiap hari.

                    Dengan sistem pemesanan yang mudah dan layanan pengantaran yang cepat, kami berkomitmen untuk memberikan pengalaman belanja sembako yang aman, praktis, dan menyenangkan.
                    </motion.p>
                    </div>
                </section>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className="lg:flex md:flex md:justify-center sm:flex sm:justify-center flex justify-center lg:my-0 md:my-8 sm:my-8 my-8">
                    <Image
                        src="/about.png"
                        alt="Minyak Telur Murah"
                        width={280} // misalnya 70 x 4 (ukuran lg:w-70 = 17.5rem ≈ 280px)
                        height={0} // bisa 0 jika `className` mengatur tingginya
                        className="flex-shrink-0 lg:w-75 md:w-70 sm:w-50 w-40"
                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 280px, (min-width: 640px) 200px, 160px"
                        />
                </motion.div>
            </div>
            <motion.p initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`mx-5 ${poppinsSB.className} lg:text-[24px] md:text-[20px] sm:text-[20px] text-[#FEEF4C] text-[20px] mt-20`}>Dokumentasi Toko</motion.p>
            <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center mb-10 mt-5 ">
                <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                className=""
                spaceBetween={10}
                loop={false}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    640: {
                    slidesPerView: 1,
                    },
                    1024: {
                    slidesPerView: 1,
                    },
                    1116: {
                    slidesPerView: 1,
                    },
                    1200: {
                    slidesPerView: 1,
                    },
                }}
                onSwiper={(swiper) => {
                    console.log('Swiper ready', swiper);
                    if (swiper?.autoplay) swiper.autoplay.start();
                }}
                >
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <CardDok url="/dok1.png" labelAatas="Restock Telur Ayam" d1="Hari ini, kami baru saja menerima kiriman telur ayam segar langsung dari peternak lokal terpercaya. Setelah dicek dan disortir, stok langsung kami tata di rak untuk siap dijual ke pelanggan.

                            Kami usahakan agar stok selalu tersedia dan kualitas tetap terjaga. Terima kasih untuk semua yang sudah belanja dan mendukung usaha kami sejak awal.    "/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <CardDok url="/dok2.png" labelAatas="Toko Tampak Depan" d1="Inilah tampilan depan toko kami — sederhana, tapi penuh semangat. Dari sini, setiap hari kami melayani kebutuhan sembako pelanggan dengan harga bersahabat dan pelayanan sebaik mungkin. Terima kasih untuk semua yang sudah mampir dan mendukung usaha kecil kami sejak awal."/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <CardDok url="/dok3.png" labelAatas="Toko Tampak Samping" d1="Beginilah tampilan toko kami dari sisi samping. Meski masih sederhana, dari tempat inilah kami mulai membangun usaha sembako ini sejak awal tahun. Semoga bisa terus berkembang dan jadi tempat belanja andalan warga sekitar."/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <CardDok url="/dok4.png" labelAatas="Telur Ayam" d1="Stok telur ayam hari ini sudah siap di rak, rapi dan siap untuk dijual. Kami usahakan untuk restock secara rutin, agar kualitas telur tetap segar dan pelanggan nggak perlu khawatir kehabisan.

                            Setiap kiriman yang datang selalu kami cek satu per satu sebelum ditata, supaya yang sampai ke tangan pelanggan benar-benar layak konsumsi. Kami percaya, meskipun usaha ini masih kecil, pelayanan dan kualitas tetap harus dijaga. "/>
                        </div>
                    </SwiperSlide>
                    ...
                    </Swiper>
            </motion.div>
            <section>
                <motion.h2 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`mx-5 ${poppinsSB.className} lg:text-[24px] md:text-[20px] sm:text-[20px] text-[#FEEF4C] text-[20px] mt-20`} id="product">Produk Kami</motion.h2>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center mb-10 mt-5">
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    className=""
                    spaceBetween={10}
                    loop={false}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        0: {
                        slidesPerView: 1,
                        },
                        640: {
                        slidesPerView: 1,
                        },
                        1024: {
                        slidesPerView: 1,
                        },
                        1116: {
                        slidesPerView: 1,
                        },
                        1200: {
                        slidesPerView: 1,
                        },
                    }}
                    onSwiper={(swiper) => {
                        console.log('Swiper ready', swiper);
                        if (swiper?.autoplay) swiper.autoplay.start();
                    }}
                    >
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <Cardsrvc url="/ndogcard.png" labelAatas="Telur Ayam" d1="Karena harga telur ayam yang naik turun, maka di website kami tidak menampilkan harganya. Namun, apabila harga lagi stabil maka 1kg telur ayam kami jual Rp. 24.000. Apabila harga lagi naik maka akan kami jual maksimal Rp. 25.500"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <Cardsrvc url="/puyuhcard.png" labelAatas="Telur Puyuh" d1="Karena harga telur puyuh juga naik turun, maka di website kami tidak menampilkan harganya. Namun, apabila harga lagi stabil maka 1kg telur puyuh kami jual Rp. 34.000. Apabila harga lagi naik maka akan kami jual maksimal Rp. 35.500"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <Cardsrvc url="/dok5.png" labelAatas="Minyak Kita" d1="Rp. 192.000/dus" d2="Rp. 16.500/liter"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <Cardsrvc url="/dok6.png" labelAatas="Beras Sintanola" d1="Rp. 74.000/5Kg"/>
                            </div>
                        </SwiperSlide>
                        ...
                        </Swiper>
                </motion.div>
            </section>

        </div>
    )
}
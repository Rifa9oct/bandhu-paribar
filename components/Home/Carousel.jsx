"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const Carousel = () => {

  const slides = [
    {
      image: "/banner1.png",
    },
    {
      image: "/banner2.png",
    },
    {
      image: "/banner3.png",
    },
  ];

  return (
    <div className="mb-16 border-b-[20px] border-[#006837]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 pt-[145px] md:pt-[100px] lg:pt-0 bg-[#006837] bg-opacity-35 flex flex-col lg:justify-center lg:items-start pl-8 lg:pl-[210px] text-center text-white">
                <h1 className="text-5xl font-bold font-serif">Join to become a Friend</h1>
                <p className="text-lg mt-4">Be a friend and reach out for a smile on another friend&apos;s face.</p>

                <Link href="#">
                  <div className="relative w-[200px] mx-auto mt-10">
                    <button className="w-[180px] text-start bg-white text-[#009245] font-bold text-lg py-[6px] rounded-lg pl-3">Be a Friend!</button>

                    <Image src="/button.png" alt="My Icon" width={56} height={56} className="absolute top-0 right-0  rounded-lg" />
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

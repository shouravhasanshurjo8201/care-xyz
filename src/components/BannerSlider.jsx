"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Reliable Care for Your Loved Ones",
    subtitle: "Childcare • Elderly Care • Special Support",
    bgImg: "https://i.postimg.cc/D0Xg1kh9/download.jpg",
  },
  
  {
    id: 2,
    title: "Safety is Our Top Priority",
    subtitle: "Verified caregivers & secure platform.",
    bgImg: "https://i.postimg.cc/qvxzgbf0/imagese.jpg",

  },
  {
    id: 3,
    title: "Expert Caretakers at Your Fingertips",
    subtitle: "Easy booking from any device, anytime.",
    bgImg: "https://i.postimg.cc/c1n2QPFw/images.jpg",
  },
];

const BannerSlider = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[300px] bg-slate-100 animate-pulse p-2 rounded-xl" />;
  }

  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-xl p-2 relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white !opacity-40',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-emerald-500 !w-8 !rounded-full !opacity-100'
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full rounded-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>

              <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 mb-4 text-[10px] md:text-xs font-black tracking-[0.3em] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full uppercase">
                    Premium Home Care
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] md:mb-6 tracking-tighter">
                    {slide.title}
                  </h2>
                  
                  <p className="text-base md:text-xl lg:text-2xl text-slate-300 font-medium mb-8 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => router.push('/')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-2 md:px-10 md:py-3 rounded-2xl transition-all transform hover:scale-102 active:scale-95 shadow-xl shadow-emerald-900/20"
                    >
                      Book a Service
                    </button>
                    <button 
                       onClick={() => router.push('/About')}
                       className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-black px-8 py-4 md:px-10 md:py-5 rounded-2xl transition-all"
                    >
                      How it Works
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-swiper-prev absolute left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hidden md:flex items-center justify-center text-white transition-all hover:bg-white/5 hover:border-emerald-600 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </div>
        <div className="custom-swiper-next absolute right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hidden md:flex items-center justify-center text-white transition-all hover:bg-white/5 hover:border-emerald-600 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </div>
      </Swiper>
      
      <style>{`
        .swiper-pagination-bullet { transition: all 0.3s ease-in-out; }
      `}</style>
    </div>
  );
};

export default BannerSlider;
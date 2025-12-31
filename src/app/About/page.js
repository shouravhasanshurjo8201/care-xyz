"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-slate-800 py-10 px-5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700 blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-4 text-md font-black tracking-[0.2em] text-emerald-400 bg-emerald-400/10 rounded-full uppercase">
            Since 2025
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter leading-tight">
            Humanizing <span className="text-emerald-500">Care</span> through Technology.
          </h1>
          <p className="text-slate-400 text-lg  font-medium leading-relaxed max-w-2xl mx-auto">
            We believe every family member deserves the highest standard of care. 
            Safety, compassion, and reliability are the pillars of our service.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          <div className="relative">
            <h2 className="text-4xl font-black text-emerald-500 mb-8 tracking-tight">How it started</h2>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                Care.xyz was born from a simple realization: finding a trustworthy caregiver shouldn't be a gamble. Whether it's for a newborn or an elderly parent, the stress of finding the right help is universal.
                </p>
                <p>
                We built a platform that rigorously vets every caregiver, ensuring they aren't just skilled, but also compassionate. Today, we bridge the gap between busy families and professional help.
                </p>
            </div>
          </div>
          
          <div className="p-10 rounded-[3rem] border border-slate-200 relative group shadow shadow-blue-50 overflow-hidden">
            <div className="grid grid-cols-2 gap-10 relative z-10">
                <div className="space-y-1">
                    <h3 className="text-4xl font-black text-slate-900">1K+</h3>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Verified Staff</p>
                </div>
                <div className="space-y-1">
                    <h3 className="text-4xl font-black text-slate-900">5K+</h3>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Families Served</p>
                </div>
                <div className="space-y-1">
                    <h3 className="text-4xl font-black text-slate-900">24/7</h3>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Support</p>
                </div>
                <div className="space-y-1">
                    <h3 className="text-4xl font-black text-slate-900">100%</h3>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Safe Policy</p>
                </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-slate-200 p-12 shadow shadow-blue-50 rounded-[3rem] ">
            <div className="w-14 h-14 bg-emerald-200 rounded-2xl flex items-center justify-center text-3xl mb-8">🎯</div>
            <h2 className="text-2xl text-emerald-300 font-black mb-4 ">Our Mission</h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              To empower families with peace of mind by providing a seamless, tech-driven network of certified caregivers who prioritize safety and emotional well-being above all.
            </p>
          </div>

          <div className="border border-slate-200 p-12 shadow shadow-blue-50 rounded-[3rem]">
            <div className="w-14 h-14 bg-emerald-200 rounded-2xl flex items-center justify-center text-3xl mb-8">🌟</div>
            <h2 className="text-2xl text-emerald-300 font-black mb-4">Our Vision</h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              To become the global standard for home-based care, making professional help accessible and affordable for every household across the nation.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-emerald-400 tracking-tight">What We Offer</h2>
            <p className="text-slate-500 font-medium mt-2">More than just a service, we provide peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "👶", title: "Baby Sitting", desc: "Nurturing care for your little ones with certified safety experts." },
              { icon: "👴", title: "Elderly Care", desc: "Compassionate companionship and daily support for the elderly." },
              { icon: "🏠", title: "Patient Care", desc: "Specialized assistance for recovering individuals at home." }
            ].map((s, i) => (
              <div key={i}  className="group p-10 border border-slate-200 rounded-[2.5rem] hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" border border-slate-200 shadow shadow-blue-50 rounded-[3rem]  p-12 text-center text-white relative overflow-hidden">
        
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black mb-8 text-emerald-400">Ready to join our community?</h2>
            <p className="text-slate-400 mb-12 font-medium text-lg leading-relaxed">
              Whether you are a professional caregiver looking for opportunities or a family in need of help, we have a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => router.push('/')}
                className="bg-emerald-600 px-12 py-5 rounded-2xl font-black text-white hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
              >
                Start Booking
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="bg-sky-400 border border-white/10 px-12 py-5 rounded-2xl font-black text-white hover:bg-sky-600 transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
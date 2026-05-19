"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
// import { useAuth } from "@/context/AuthContext"; 

const services = [
  {
    id: "1",
    name: "Baby Care",
    price: 500,
    icon: "👶",
    description:
      "Professional and trusted babysitters to take care of your little ones with love and safety. Our caregivers focus on emotional development and physical safety.",
    benefits: [
      { title: "Certified Care", desc: "Background-checked and certified caregivers." },
      { title: "Activity Planning", desc: "Structured play and educational activities." },
      { title: "Safety First", desc: "First-aid trained staff for complete peace of mind." },
    ],
  },
  {
    id: "2",
    name: "Elderly Service",
    price: 700,
    icon: "🧓",
    description:
      "Compassionate and experienced caretakers to support elderly family members at home with dignity and respect.",
    benefits: [
      { title: "Medication", desc: "Timely medication reminders and assistance." },
      { title: "Mobility Support", desc: "Help with exercise and moving around safely." },
      { title: "Companionship", desc: "Emotional support and active listening." },
    ],
  },
  {
    id: "3",
    name: "Sick People Service",
    price: 600,
    icon: "🤒",
    description:
      "Reliable care for sick or recovering individuals with attention to hygiene and professional health monitoring.",
    benefits: [
      { title: "Health Tracking", desc: "Monitoring temperature, BP, and symptoms." },
      { title: "Hygiene Care", desc: "Professional assistance with bathing and dressing." },
      { title: "Recovery Support", desc: "Following doctor's post-care instructions." },
    ],
  },
];

const ServiceDetail = () => {
  const router = useRouter();
  const params = useParams();
  const { service_id } = params;
//   const { user } = useAuth(); // Using your auth logic

  const service = services.find((s) => s.id === service_id);

  const handleBooking = () => {
        router.push(`/booking/${service_id}`);
    // if (user) {
    // } else {
    //   router.push(`/login?redirect=/booking/${service_id}`);
    // }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-slate-800">Service not found</p>
          <button onClick={() => router.push("/")} className="text-emerald-600 font-bold mt-4 hover:underline">
            ← Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="bg-slate-900 pt-20 pb-32 px-6 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-emerald-500 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-emerald-400 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
            <span className="text-5xl mb-6 inline-block">{service.icon}</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                {service.name}
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                {service.description}
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Benefits & Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-amber-50 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8">What we offer</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="h-10 w-10 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-xl font-bold mb-4">
                        {idx + 1}
                    </div>
                    <h4 className="font-black text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pricing & Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-amber-50 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 sticky top-10">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Starting From</p>
                <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black text-slate-900">{service.price}</span>
                    <span className="text-slate-500 font-bold uppercase text-sm tracking-tighter">BDT / Hour</span>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <span className="text-emerald-500">✓</span> Professional Caregivers
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <span className="text-emerald-500">✓</span> No Hidden Charges
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <span className="text-emerald-500">✓</span> Instant Confirmation
                    </div>
                </div>

                <button
                    onClick={handleBooking}
                    className="w-full bg-emerald-600 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-emerald-700 hover:scale-[1.02] transition-all shadow-lg shadow-emerald-200 active:scale-95"
                >
                    Book Now
                </button>
                <p className="text-center text-slate-400 text-xs mt-4 font-medium">
                    Cancel anytime before 24 hours
                </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
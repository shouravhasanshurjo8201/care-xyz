import React from "react";
import Link from "next/link";

const services = [
  {
    id: "1",
    name: "Baby Care",
    price: 500,
    description: "Ensuring a compassionate and safe environment for your little ones with expert caregivers.",
    icon: "👶",
    bgClass: "bg-orange-50",
    textClass: "text-orange-600"
  },
  {
    id: "2",
    name: "Elderly Service",
    price: 700,
    description: "Dedicated support and healthcare assistance with the utmost respect for senior citizens.",
    icon: "👴",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-600"
  },
  {
    id: "3",
    name: "Sick People Service",
    price: 600,
    description: "Professional nursing and care to ensure a speedy and comfortable recovery for your loved ones.",
    icon: "🤒",
    bgClass: "bg-blue-50",
    textClass: "text-blue-600"
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-emerald-400 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Providing the best caregiving services with the safety and well-being of your family as our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-slate-200 p-8 rounded-3xl transition-all duration-300 hover:shadow-md hover:shadow-emerald-100 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${service.bgClass} ${service.textClass} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {service.name}
              </h3>

              <p className="text-slate-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Rate</p>
                  <p className="text-xl font-black text-emerald-600">
                    {service.price} <span className="text-sm font-normal text-slate-500">BDT/hr</span>
                  </p>
                </div>

                <Link href={`/service/${service.id}`}>
                  <button className="bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default Services;
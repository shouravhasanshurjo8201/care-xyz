import React from "react";

const testimonials = [
    {
        id: 1,
        name: "Emma Johnson",
        role: "Mother & Care Seeker",
        feedback:
            "Care.xyz helped me book a reliable babysitter within minutes. The service was professional and safe!",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 2,
        name: "Jacob Smith",
        role: "Son & Care Manager",
        feedback:
            "Finding elderly care for my father was never this easy. The caregivers are trusted and compassionate.",
        img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        id: 3,
        name: "Sophia Lee",
        role: "Busy Professional",
        feedback:
            "Highly recommend Care.xyz! Easy booking, friendly caregivers, and excellent support.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
];

const metrics = [
    { id: 1, value: "1,200+", label: "Families Helped", icon: "🏠" },
    { id: 2, value: "5,000+", label: "Hours of Service", icon: "⏳" },
    { id: 3, value: "98%+", label: "Positive Ratings", icon: "⭐" },
];

const TestimonialsSection = () => {
    return (
        <section className="py-10">
            <div className="px-4">

                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-500 mt-3">
                        What Our Users Say
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Real experiences from users who trusted Care.xyz for their family's care needs.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mb-20">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="relative  p-6 rounded-xl  border border-slate-200 shadow-sm hover:border-emerald-200 transition-all transform hover:-translate-y-2 group"
                        >

                            <div className="relative z-10 flex flex-col h-full">
                                <p className="text-slate-700 italic leading-relaxed mb-8 flex-row">
                                    "{item.feedback}"
                                </p>

                                <div className="flex items-center mt-auto">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-2xl object-cover ring-4 ring-emerald-100 shadow-sm"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-md font-bold text-slate-900 leading-tight">
                                            {item.name}
                                        </h4>
                                        <p className="text-emerald-600 text-xs font-bold uppercase tracking-tighter mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((metric) => (
                        <div
                            key={metric.id}
                            className=" border border-slate-200 p-10 rounded-xl text-center shadow-sm hover:border-emerald-200 transition-all transform hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{metric.icon}</div>
                            <h4 className="text-4xl font-black text-slate-900 mb-1">{metric.value}</h4>
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
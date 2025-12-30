import React from "react";

const AboutSection = () => {
  const features = [
    {
      title: "Trusted Caregivers",
      description: "Every caregiver in our network is thoroughly vetted and experienced, ensuring the highest level of safety for your loved ones.",
      icon: "🛡️",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Easy Booking",
      description: "Select your desired service, set your preferred schedule, and complete your booking in just a few clicks—simple and fast!",
      icon: "⚡",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Accessible Anywhere",
      description: "Whether you are on a mobile, tablet, or computer, you can access our services seamlessly anytime, from anywhere.",
      icon: "📱",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-10 ">
      <div className=" px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm block mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              We care for them <br /> <span className="text-emerald-600">just like you do</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Care.xyz, our mission is to make professional caregiving services easy, secure, and affordable for every family. 
              We understand how precious your family is to you, which is why we bridge the gap by connecting you with reliable and compassionate caretakers. 
              From childcare to elderly support ensuring quality care for everyone is our primary responsibility.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full h-80 bg-amber-50 border border-slate-300 rounded-xl relative overflow-hidden shadow-md shadow-emerald-50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-70">
                 🏠
               </div>
               <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white">
                  <p className="text-slate-800 font-bold">Trusted by 1200+ Families</p>
                  <p className="text-sm text-slate-500">Helping people since 2024</p>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-5 rounded-3xl border border-slate-300 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-700">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
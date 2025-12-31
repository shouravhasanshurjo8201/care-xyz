"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const contactData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    console.log("Contact Message:", contactData);

    setTimeout(() => {
      toast.success("Thank you! Your message has been sent.");
      form.reset();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-amber-50 p-5">
      <div className="container  mx-auto">
        
        <div className="text-center mb-5">
          <h1 className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">Get in Touch</h1>
          <p className="text-slate-500 font-medium mt-2">We are here to help you and your loved ones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200">
          
          <div className="lg:col-span-2 bg-emerald-700 p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-6 tracking-tight">Contact Information</h2>
              <p className="text-slate-300 mb-12 leading-relaxed font-medium">
                Have questions about our services? Our dedicated support team is available to assist you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl group-hover:bg-emerald-500 transition-colors">📞</div>
                  <div>
                    <p className="text-[10px] text-emerald-400 uppercase font-black tracking-widest">Call Us</p>
                    <p className="font-bold text-lg text-white">+880 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl group-hover:bg-emerald-500 transition-colors">📧</div>
                  <div>
                    <p className="text-[10px] text-emerald-400 uppercase font-black tracking-widest">Email Us</p>
                    <p className="font-bold text-lg text-white">support@care.xyz</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl group-hover:bg-emerald-500 transition-colors">📍</div>
                  <div>
                    <p className="text-[10px] text-emerald-400 uppercase font-black tracking-widest">Location</p>
                    <p className="font-bold text-lg text-white">Jamalpur, Mymensingh, BD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all">f</div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all">t</div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all">in</div>
            </div>
          </div>

          <div className="lg:col-span-3 p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-black text-emerald-400 mb-2">Send us a Message</h3>
              <p className="text-slate-500 font-medium">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-slate-200 border bg-slate-50 p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-slate-800"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full border-slate-200 border bg-slate-50 p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-slate-800"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border-slate-200 border bg-slate-50 p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-slate-800"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your request..."
                  className="w-full border-slate-200 border bg-slate-50 p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all resize-none font-medium text-slate-800"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-slate-200 disabled:opacity-70 active:scale-[0.98]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending Message...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
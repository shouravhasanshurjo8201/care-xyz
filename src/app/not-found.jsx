"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[99vh] flex flex-col items-center justify-center bg-emerald-50 px-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-red-400 animate-pulse">
          404
        </h1>
      </div>

      <div className="max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Oops! This page could not be found.
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The link you're looking for may have been removed or you may have typed the wrong URL. Don't worry, our caretakers are ready to get you back on the right track!</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-none transition-all transform hover:-translate-y-1">
            Back to Home
          </button>
        </Link>

        <Link href="/contact">
          <button className="border-2 border-slate-200 text-slate-600 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
            Report Issue
          </button>
        </Link>
      </div>
    </div>
  );
}
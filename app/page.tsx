"use client";

import React, { useState } from "react";

export default function EnigmaFinalPortal() {
  const [inputCode, setInputCode] = useState("");
  const targetCode = "ENIGMA";

  const handleLetterClick = (letter: string) => {
    if (inputCode.length < 6) {
      const nextCode = inputCode + letter;
      setInputCode(nextCode);
      if (nextCode.toUpperCase() === targetCode) {
        setTimeout(() => alert("مرحباً بك يا صاحب المنصة.. تم ولوج البوابة الفاخرة بنجاح!"), 300);
      }
    }
  };

  const resetCode = () => setInputCode("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none overflow-x-hidden">
      <div className="text-center space-y-6 max-w-sm w-full py-8 px-6 rounded-2xl bg-zinc-950/40 border border-zinc-900 backdrop-blur-md relative z-10 shadow-2xl">
        
        {/* الهوية البصرية الحصرية LEVEL 51 */}
        <div className="relative w-20 h-20 mx-auto mb-2 rounded-full border border-zinc-800 bg-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.02)]">
          <span className="text-2xl animate-pulse">👁‍🗨</span>
          <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-[9px] font-bold px-2 py-0.5 rounded-full text-black">
            LEVEL 51
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-widest text-zinc-200">ENiGMA Core</h1>
          <p className="text-[11px] text-zinc-500">فك شفرة اللغز الرسومي لولوج البوابة الفاخرة</p>
        </div>

        {/* 🌌 تأثير البوابة الضوئي ثلاثي الأبعاد المدمج لضمان عدم حدوث شاشة سودة */}
        <div className="w-full h-48 relative rounded-2xl overflow-hidden border border-zinc-900 bg-gradient-to-b from-black to-zinc-950 shadow-inner flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full bg-zinc-900/50 border border-zinc-700/50 animate-spin [animation-duration:10s] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <div className="w-24 h-24 rounded-full border border-dashed border-zinc-600 animate-spin [animation-duration:4s]" />
          </div>
          <span className="text-zinc-500 text-xs tracking-widest uppercase z-10 animate-pulse">3D Portal Active</span>
        </div>

        {/* شاشة الرمز السري */}
        <div className="w-full h-12 bg-black border border-zinc-800 rounded-xl font-mono text-lg tracking-widest flex items-center justify-center text-zinc-300">
          {inputCode || <span className="text-zinc-700 text-xs font-sans">أدخل الشفرة السرية...</span>}
        </div>

        {/* لوحة تحكم الحروف */}
        <div className="grid grid-cols-3 gap-3 my-4">
          {["i", "G", "M", "E", "A", "N"].map((letter, index) => (
            <button
              key={index}
              onClick={() => handleLetterClick(letter)}
              className="py-3 border border-zinc-800/60 rounded-xl bg-zinc-950/50 font-mono text-base font-bold text-zinc-400 hover:text-white hover:border-zinc-500 transition-all active:scale-95"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* زر التخطي السري الآمن */}
        <div className="space-y-2">
          <button 
            onClick={() => alert("تم التخطي الآمن للبوابة الـ VIP")}
            className="w-full py-3 rounded-xl border border-zinc-800 bg-black text-xs font-medium text-zinc-500 hover:text-white transition-all"
          >
            [ تخطي البوابة سرياً / Bypass ]
          </button>
          {inputCode && (
            <button onClick={resetCode} className="text-[10px] text-zinc-600 underline block mx-auto hover:text-zinc-400">
              إعادة تعيين الشفرة
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

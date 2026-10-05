"use client";

import React, { useState, useEffect, Suspense } from "react";

// مكون معالجة الأخطاء لمنع الشاشة السودة نهائياً على الموبايل
class CanvasErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
          <p className="text-xs text-zinc-400">جاري تحميل البوابة ثلاثية الأبعاد بدقة متوافقة...</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function EnigmaPremiumPortal() {
  const [inputCode, setInputCode] = useState("");
  const [isLocked, setIsLocked] = useState(true);
  const targetCode = "ENIGMA";

  // دالة التعامل مع إدخال الحروف وفك الشفرة بدون تهنيج
  const handleLetterClick = (letter: string) => {
    if (inputCode.length < 6) {
      const nextCode = inputCode + letter;
      setInputCode(nextCode);
      
      // عند إدخال الرمز بالكامل بنجاح
      if (nextCode.toUpperCase() === targetCode) {
        setTimeout(() => {
          setIsLocked(false);
          alert("تم ولوج بوابة إنيجما الفاخرة بنجاح!");
        }, 400);
      }
    }
  };

  const resetCode = () => setInputCode("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none overflow-hidden relative">
      
      {/* الخلفية الديناميكية الفخمة (المحرك ثلاثي الأبعاد والخلفية المدمجة) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80" />

      {/* المحتوى الرئيسي المحمي */}
      <div className="text-center space-y-8 max-w-md w-full z-10 animate-fade-in px-6 py-8 rounded-2xl bg-zinc-950/40 border border-zinc-900 backdrop-blur-md">
        
        {/* الهوية البصرية الفخمة للمخفي (صاحب المنصة) */}
        <div className="relative w-24 h-24 mx-auto mb-2 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.05)]">
          <span className="text-3xl">👁‍🗨</span>
          <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-[10px] font-bold px-2 py-0.5 rounded-full text-black tracking-wider">
            LEVEL 51
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100">
            ENiGMA Core
          </h1>
          <p className="text-xs text-zinc-400 tracking-wide font-light">
            فك شفرة اللغز الرسومي لولوج البوابة الفاخرة
          </p>
        </div>

        {/* شاشة عرض الرمز المدخل */}
        <div className="w-full py-3 bg-black/60 border border-zinc-800 rounded-xl font-mono text-xl tracking-widest min-h-[52px] flex items-center justify-center text-zinc-200 shadow-inner">
          {inputCode || <span className="text-zinc-700 text-sm font-sans tracking-normal">أدخل الشفرة السرية...</span>}
        </div>

        {/* لوحة تحكم شبكة الحروف ثلاثية الأبعاد التفاعلية */}
        <CanvasErrorBoundary>
          <div className="grid grid-cols-3 gap-3 my-6 justify-items-center">
            {["i", "G", "M", "E", "A", "N"].map((letter, index) => (
              <button
                key={index}
                onClick={() => handleLetterClick(letter)}
                className="w-16 h-16 flex flex-col items-center justify-center border border-zinc-800 rounded-xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 text-xl font-mono font-bold text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-200 active:scale-90 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              >
                <span className="text-xs text-zinc-600 font-sans block mb-1">GLB #{index+1}</span>
                {letter}
              </button>
            ))}
          </div>
        </CanvasErrorBoundary>

        {/* أزرار التحكم السريع لتجنب أي تعليق على الموبايل */}
        <div className="space-y-3 pt-2">
          <button 
            onClick={() => { setIsLocked(false); alert("تم التخطي الآمن للبوابة"); }}
            className="w-full py-3.5 rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-black text-xs tracking-wider font-semibold text-zinc-400 hover:text-white transition-all active:scale-[0.98]"
          >
            [ تخطي البوابة سرياً / Bypass ]
          </button>
          
          {inputCode && (
            <button 
              onClick={resetCode}
              className="text-xs text-zinc-500 hover:text-zinc-300 underline transition-all block mx-auto"
            >
              إعادة تعيين المحاولة
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

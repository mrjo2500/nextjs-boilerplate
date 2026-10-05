"use client";

import React, { useState } from "react";

export default function EnigmaCorePortal() {
  const [inputCode, setInputCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const targetCode = "ENIGMA";

  // دالة الضغط على الحروف لفك الشفرة
  const handleLetterClick = (letter: string) => {
    if (inputCode.length < 6) {
      const current = inputCode + letter;
      setInputCode(current);
    }
  };

  const clearInput = () => setInputCode("");

  // تخطي البوابة أو النجاح في فك الشفرة
  const handleBypass = () => {
    setUnlocked(true);
    alert("تم الدخول إلى بوابتك الفاخرة بنجاح 👁‍🗨");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none antialiased">
      <div className="text-center space-y-6 max-w-sm w-full py-8 px-6 rounded-2xl bg-zinc-950/50 border border-zinc-900 backdrop-blur-md">
        
        {/* أيقونة الهوية الفاخرة LEVEL 51 */}
        <div className="relative w-20 h-20 mx-auto mb-4 rounded-full border border-zinc-800 bg-black flex items-center justify-center shadow-2xl">
          <span className="text-2xl animate-pulse">👁‍🗨</span>
          <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-[9px] font-bold px-2 py-0.5 rounded-full text-black">
            LEVEL 51
          </div>
        </div>

        {/* العناوين الرئيسية */}
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-widest text-zinc-100">
            ENiGMA Core
          </h1>
          <p className="text-xs text-zinc-500">
            فك شفرة اللغز الرسومي لولوج البوابة الفاخرة
          </p>
        </div>

        {/* خانة إدخال وتأكيد الشفرة السرية */}
        <div className="w-full h-12 bg-black border border-zinc-800 rounded-xl font-mono text-lg tracking-widest flex items-center justify-center text-zinc-300 shadow-inner">
          {inputCode || <span className="text-zinc-700 text-xs font-sans tracking-normal">أدخل الشفرة السرية...</span>}
        </div>

        {/* شبكة أزرار الحروف المصلحة والمقاومة للتجميد */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {[
            { id: "GLB #1", char: "i" },
            { id: "GLB #2", char: "G" },
            { id: "GLB #3", char: "M" },
            { id: "GLB #4", char: "E" },
            { id: "GLB #5", char: "A" },
            { id: "GLB #6", char: "N" }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleLetterClick(item.char)}
              className="w-full aspect-square flex flex-col items-center justify-center border border-zinc-800/80 rounded-xl bg-zinc-950/40 font-mono text-lg font-bold text-zinc-300 hover:text-white hover:border-zinc-600 transition-all active:scale-95"
            >
              <span className="text-[9px] text-zinc-600 font-sans block mb-1 font-normal">{item.id}</span>
              {item.char}
            </button>
          ))}
        </div>

        {/* أزرار التحكم السريع والتخطي الآمن */}
        <div className="space-y-3">
          <button 
            onClick={handleBypass}
            className="w-full py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 text-xs font-medium text-zinc-400 hover:text-white transition-all active:scale-[0.98]"
          >
            [ تخطي البوابة سرياً / Bypass ]
          </button>
          
          {inputCode && (
            <button 
              onClick={clearInput}
              className="text-[11px] text-zinc-500 hover:text-zinc-300 underline block mx-auto"
            >
              إعادة تعيين
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

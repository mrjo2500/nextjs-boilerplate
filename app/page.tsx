"use client";

import React, { useState } from "react";

export default function EnigmaCoreVIP() {
  const [inputCode, setInputCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false); // شرط التحكم في النقل
  const [walletNumber, setWalletNumber] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [isSmsSent, setIsSmsSent] = useState(false);
  
  const targetCode = "ENIGMA";

  const handleLetterClick = (letter: string) => {
    if (inputCode.length < 6) {
      const nextCode = inputCode + letter;
      setInputCode(nextCode);
      if (nextCode.toUpperCase() === targetCode) {
        setIsUnlocked(true); // فك الشفرة ينقل فوراً
      }
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSmsSent) {
      setIsSmsSent(true);
      alert("تم إرسال رمز التأكيد SMS إلى محفظتك بنجاح 🔒");
    } else {
      alert("مرحباً بك يا صاحب المنصة! تم تفعيل حسابك الـ VIP ومزامنة الـ 1,000,000 كوين 👁‍🗨");
    }
  };

  // 1. الوجهة: الواجهة اللي هيروح ليها بعد الضغط على التخطي
  if (isUnlocked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none antialiased">
        <div className="text-center space-y-6 max-w-sm w-full py-8 px-6 rounded-2xl bg-zinc-950/50 border border-zinc-900 backdrop-blur-md shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 flex items-center justify-center shadow-lg">
            <span className="text-2xl">💰</span>
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-wide text-zinc-100">بوابة فودافون كاش الـ VIP</h2>
            <p className="text-xs text-zinc-500">سجل برقم محفظتك لتفعيل السحب التلقائي للأرباح</p>
          </div>
          <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2 text-right" dir="rtl">
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400 mr-1">رقم المحفظة الذكية:</label>
              <input 
                type="tel" 
                required
                disabled={isSmsSent}
                placeholder="010XXXXXXXX" 
                value={walletNumber}
                onChange={(e) => setWalletNumber(e.target.value)}
                className="w-full h-11 bg-black border border-zinc-800 rounded-xl px-3 font-mono text-sm tracking-widest text-center focus:border-zinc-600 outline-none text-zinc-200"
              />
            </div>
            {isSmsSent && (
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-400 mr-1">رمز التأكيد (SMS):</label>
                <input 
                  type="text" 
                  required
                  maxLength={6}
                  placeholder="------" 
                  value={smsCode}
                  onChange={(e) => setSmsCode(e.target.value)}
                  className="w-full h-11 bg-black border border-zinc-800 rounded-xl px-3 font-mono text-base tracking-widest text-center focus:border-zinc-600 outline-none text-zinc-300"
                />
              </div>
            )}
            <button type="submit" className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white transition-all">
              {isSmsSent ? "تأكيد وولوج المنصة" : "إرسال رمز التأكيد SMS"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. البوابة الحالية (المستقرة) اللي فيها زرار التخطي
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none antialiased">
      <div className="text-center space-y-6 max-w-sm w-full py-8 px-6 rounded-2xl bg-zinc-950/50 border border-zinc-900 backdrop-blur-md relative z-10 shadow-2xl">
        <div className="relative w-20 h-20 mx-auto mb-2 rounded-full border border-zinc-800 bg-black flex items-center justify-center">
          <span className="text-2xl animate-pulse">👁‍🗨</span>
          <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-[9px] font-bold px-2 py-0.5 rounded-full text-black">LEVEL 51</div>
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-widest text-zinc-100 uppercase">ENiGMA Core</h1>
          <p className="text-[11px] text-zinc-500">فك شفرة اللغز الرسومي لولوج البوابة الفاخرة</p>
        </div>
        <div className="w-full h-44 relative rounded-2xl overflow-hidden border border-zinc-900/60 bg-gradient-to-b from-black to-zinc-950 flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full border border-dashed border-zinc-700/60 animate-spin [animation-duration:12s] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-dotted border-zinc-500/40 animate-spin [animation-duration:6s]" />
          </div>
          <span className="text-zinc-600 text-[10px] tracking-widest uppercase z-10 animate-pulse font-mono">Core System Active</span>
        </div>
        <div className="w-full h-12 bg-black border border-zinc-800 rounded-xl font-mono text-lg tracking-widest flex items-center justify-center text-zinc-300">
          {inputCode || <span className="text-zinc-700 text-xs font-sans">أدخل الشفرة السرية...</span>}
        </div>
        <div className="grid grid-cols-3 gap-3 my-4">
          {["i", "G", "M", "E", "A", "N"].map((letter, index) => (
            <button key={index} onClick={() => handleLetterClick(letter)} className="py-3 border border-zinc-800/80 rounded-xl bg-zinc-950/40 font-mono text-base font-bold text-zinc-300 hover:text-white transition-all active:scale-95">
              {letter}
            </button>
          ))}
        </div>
        
        {/* زر التخطي اللي هينقل للحالة التانية فوراً */}
        <button 
          onClick={() => setIsUnlocked(true)} 
          className="w-full py-3 rounded-xl border border-zinc-800 bg-black text-xs font-medium text-zinc-400 hover:text-white transition-all"
        >
          [ تخطي البوابة سرياً / Bypass ]
        </button>
      </div>
    </div>
  );
}

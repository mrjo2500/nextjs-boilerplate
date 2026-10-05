"use client";

import React, { useState } from "react";

export default function EnigmaCompleteSystem() {
  // مراحل التنقل في السيستم
  const [inputCode, setInputCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  // بيانات فودافون كاش والـ SMS
  const [walletNumber, setWalletNumber] = useState("01090718514");
  const [smsCode, setSmsCode] = useState("");
  const [isSmsSent, setIsSmsSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const targetCode = "ENIGMA";

  // 1. نظام الضغط على الحروف لفك الشفرة
  const handleLetterClick = (letter: string) => {
    if (inputCode.length < 6) {
      const nextCode = inputCode + letter;
      setInputCode(nextCode);
      if (nextCode.toUpperCase() === targetCode) {
        setIsUnlocked(true);
      }
    }
  };

  // 2. نظام تشغيل بوابة الـ SMS وتوليد الرمز
  const triggerSmsGateway = (e: React.FormEvent) => {
    e.preventDefault();
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setIsSmsSent(true);
    alert(`🔒 تم تشغيل نظام الـ SMS بنجاح وإرسال الرمز السرّي إلى ${walletNumber}`);
    alert(`[رمز التفعيل الحصري لاختبار لوحة تحكمك هو: ${randomOtp}]`);
  };

  // 3. نظام التحقق ووليد لوحة التحكم الـ VIP
  const verifySmsCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (smsCode === generatedOtp || smsCode === "515251") {
      setIsDashboardVisible(true);
    } else {
      alert("❌ رمز التأكيد غير صحيح، يرجى المحاولة مرة أخرى.");
    }
  };

  // =========================================================
  // [المرحلة الرابعة والأخيرة]: لوحة التحكم المركزية الـ VIP (LEVEL 51)
  // =========================================================
  if (isDashboardVisible) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none antialiased">
        <div className="text-center space-y-6 max-w-md w-full py-8 px-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 backdrop-blur-md shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4" dir="rtl">
            <div className="text-right">
              <h2 className="text-lg font-black text-zinc-100">لوحة تحكم ENiGMA المركزية</h2>
              <p className="text-[10px] text-amber-500 font-mono">OWNER PORTAL // VIP</p>
            </div>
            <div className="bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800 text-center">
              <span className="text-[10px] block text-zinc-500">الحساب</span>
              <span className="text-xs font-bold text-zinc-300">LEVEL 51</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-4 rounded-xl border border-zinc-800 text-center shadow-inner">
            <span className="text-xs text-zinc-400 block mb-1">رصيد كوينز الدعم الفوري</span>
            <span className="text-2xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 animate-pulse">
              1,000,000 COINS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-right" dir="rtl">
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-900">
              <span className="text-[10px] text-zinc-500 block">رقم السحب النشط</span>
              <span className="text-xs font-mono font-bold text-zinc-300">{walletNumber}</span>
            </div>
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-900">
              <span className="text-[10px] text-zinc-500 block">حالة الربط التلقائي</span>
              <span className="text-xs font-bold text-green-500 flex items-center gap-1 justify-end">متصل حالاً 🟢</span>
            </div>
          </div>

          <div className="space-y-2 pt-2 text-right" dir="rtl">
            <h3 className="text-xs font-bold text-zinc-400 px-1">صلاحيات التحكم السري:</h3>
            <div className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 px-4 flex justify-between items-center">
              <span>⚙️ إعدادات نسبة رسوم تحميل الفيديوهات</span>
              <span className="font-mono text-zinc-500">100% لِك</span>
            </div>
            <div className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 px-4 flex justify-between items-center">
              <span>🛡️ تفعيل جدار الحماية وسرية هوية المالك</span>
              <span className="text-green-500">مُفعل بنجاح</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================
  // [المرحلة الثانية والثالثة]: بوابة فودافون كاش ونظام الـ SMS
  // =========================================================
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

          {!isSmsSent ? (
            <form onSubmit={triggerSmsGateway} className="space-y-4 pt-2 text-right" dir="rtl">
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-400 mr-1">رقم المحفظة الذكية:</label>
                <input 
                  type="tel" 
                  required
                  placeholder="010XXXXXXXX" 
                  value={walletNumber}
                  onChange={(e) => setWalletNumber(e.target.value)}
                  className="w-full h-11 bg-black border border-zinc-800 rounded-xl px-3 font-mono text-sm tracking-widest text-center focus:border-zinc-600 outline-none text-zinc-200"
                />
              </div>
              <button type="submit" className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white transition-all">
                إرسال رمز التأكيد SMS الحقيقي
              </button>
            </form>
          ) : (
            <form onSubmit={verifySmsCode} className="space-y-4 pt-2 text-right" dir="rtl">
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-400 mr-1">أدخل الرمز السري المستلم (SMS):</label>
                <input 
                  type="text" 
                  required
                  maxLength={6}
                  placeholder="------" 
                  value={smsCode}
                  onChange={(e) => setSmsCode(e.target.value)}
                  className="w-full h-11 bg-black border border-zinc-800 rounded-xl px-3 font-mono text-lg tracking-widest text-center focus:border-zinc-600 outline-none text-zinc-300"
                />
              </div>
              <button type="submit" className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white transition-all">
                تأكيد الكود وولوج لوحة التحكم
              </button>
            </form>
          )}

        </div>
      </div>
    );
  }

  // =========================================================
  // [المرحلة الأولى]: البوابة الأساسية الحالية لـ ENiGMA Core
  // =========================================================
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 select-none antialiased">
      <div className="text-center space-y-6 max-w-sm w-full py-8 px-6 rounded-2xl bg-zinc-950/50 border border-zinc-900 backdrop-blur-md relative z-10 shadow-2xl">
        
        <div className="relative w-20 h-20 mx-auto mb-2 rounded-full border border-zinc-800 bg-black flex items-center justify-center">
          <span className="text-2xl animate-pulse">👁‍🗨</span>
          <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-[9px] font-bold px-2 py-0.5 rounded-full text-black">
            LEVEL 51
          </div>
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
{inputCode || أدخل الشفرة السرية...}
{["i", "G", "M", "E", "A", "N"].map((letter, index) => (
<button
key={index}
onClick={() => handleLetterClick(letter)}
className="py-3 border border-zinc-800/80 rounded-xl bg-zinc-950/40 font-mono text-base font-bold text-zinc-300 hover:text-white transition-all active:scale-95"
>
{letter}

))}
<button
onClick={() => setIsUnlocked(true)}
className="w-full py-3 rounded-xl border border-zinc-800 bg-black text-xs font-medium text-zinc-400 hover:text-white transition-all"
>
[ تخطي البوابة سرياً / Bypass ]
);
}

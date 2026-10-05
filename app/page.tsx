'use client';
import React, { useState } from 'react';

export default function EnigmaMainGateway() {
  const [jumbledLetters, setJumbledLetters] = useState(['i', 'G', 'M', 'E', 'A', 'N']);
  const [userArrangement, setUserArrangement] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1000000); 
  const [activeTab, setActiveTab] = useState('live'); 
  const [cashoutAmount, setCashoutAmount] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [systemMessage, setSystemMessage] = useState('');

  const OWNER_PHONE = "01090718514"; 

  const handleLetterClick = (letter: string) => {
    if (userArrangement.includes(letter)) return;
    const nextArrangement = [...userArrangement, letter];
    setUserArrangement(nextArrangement);
    if (nextArrangement.join('') === "ENiGMA") {
      setIsPassed(true);
    }
  };

  const executeInstantCashout = () => {
    const coins = parseInt(cashoutAmount);
    if (!coins || coins < 500) {
      setSystemMessage('عذراً، الحد الأدنى للاستبدال الفوري هو 500 عملة (تعادل 50 ج.م)');
      return;
    }
    if (coins > walletBalance) {
      setSystemMessage('عذراً، رصيد العملات الحالي غير كافٍ');
      return;
    }
    setWalletBalance(prev => prev - coins);
    setSystemMessage(`⚡ تم الاستبدال بنجاح! تم تحويل ${coins / 10} ج.م فوراً إلى المحفظة الرقمية: ${userPhone || OWNER_PHONE}`);
  };

  if (!isPassed) {
    return (
      <div className="fixed inset-0 bg-[#020205] text-white flex flex-col items-center justify-center p-4 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,110,255,0.12)_0%,transparent_80%)] opacity-70"></div>
        <div className="w-full max-w-lg bg-[#07070c]/90 border border-zinc-800/80 p-8 rounded-[2rem] backdrop-blur-2xl text-center relative z-10 shadow-2xl">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-zinc-700 to-black border border-zinc-600 flex items-center justify-center shadow-lg shadow-blue-500/10">
              <span className="text-xl">👁️‍🗨️</span>
            </div>
          </div>
          <h2 className="text-2xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 uppercase mb-2">ENiGMA Core</h2>
          <p className="text-zinc-500 text-[10px] tracking-widest uppercase mb-8">فك شفرة اللغز الرسومي لولوج البوابة الفاخرة</p>
          <div className="space-y-6 mb-8">
            <div className="flex justify-center gap-2 min-h-[50px] p-3 bg-black/60 border border-zinc-900 rounded-xl font-mono text-xl font-bold text-blue-400">
              {userArrangement.map((char, idx) => <span key={idx} className="animate-pulse">{char}</span>)}
            </div>
            <div className="flex justify-center gap-3">
              {jumbledLetters.map((char) => (
                <button
                  key={char}
                  onClick={() => handleLetterClick(char)}
                  className="w-12 h-12 bg-zinc-900/50 border border-zinc-800 rounded-xl font-mono font-black text-sm hover:border-blue-500 hover:text-blue-400 transition transform active:scale-95"
                >
                  {char}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => setIsPassed(true)} className="text-[9px] font-bold tracking-widest text-zinc-600 hover:text-zinc-400 transition">[ تخطي البوابة / Bypass ]</button>
        </div>
      </div>
    );  return (
    <div className="min-h-screen bg-[#030307] text-white p-4 font-sans select-none pb-24">
      <div className="max-w-4xl mx-auto bg-zinc-950/60 border border-zinc-900 p-6 rounded-3xl backdrop-blur-xl mb-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-[9px] font-black tracking-widest uppercase rounded-bl-xl">VIP Account</div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xl animate-bounce">👑</div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-rose-500 p-0.5 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center text-2xl">🥷</div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-red-600 text-white font-black text-[10px] px-2 py-0.5 rounded-lg border border-zinc-950">LVL 52</div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">MRJOO <span className="text-rose-500 italic">pro</span></h1>
            <p className="text-zinc-500 text-[11px] mt-0.5">"العرب هنا.. سحقاً لاحتكار وجشع تيك توك"</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-black/40 border border-zinc-900 p-3 rounded-xl min-w-[120px] text-center">
            <span className="text-[9px] text-zinc-500 block uppercase font-bold tracking-wider">رصيد العملات الحالي</span>
            <span className="text-lg font-black text-yellow-400 font-mono">{walletBalance.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex gap-2 border-b border-zinc-900 pb-3 mb-6 overflow-x-auto">
        {[
          { id: 'live', name: '🎥 ساحة اللايف وبثوث PK' },
          { id: 'religion', name: '🕋 قرآن وتغذية سمعية' },
          { id: 'education', name: '📚 واحة العلم والمعرفة' },
          { id: 'literature', name: '✍️ صالون الخواطر والأدب' },
          { id: 'wallet', name: '💳 استبدال وشحن فوري' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSystemMessage(''); }}
            className={`px-4 py-2 text-xs rounded-xl font-black transition border ${
              activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-400'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto min-h-[300px]">
        {activeTab === 'live' && (
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 text-center space-y-4">
            <div className="inline-block px-3 py-1 bg-red-600 text-[10px] font-black rounded-full animate-pulse tracking-wider">8K CINEMATIC MODE</div>
            <h2 className="text-lg font-black uppercase tracking-widest text-zinc-200">محرك البث وتحديات الـ PK الجماعية جاهز</h2>
            <p className="text-zinc-500 text-xs max-w-md mx-auto">نظام (تنازل / محارب) مفعل تلقائياً عند آخر 10 ثوانٍ مع هبوط شعاع الماس للفائز بالـ 1000 عملة.</p>
          </div>
        )}

        {activeTab === 'wallet' && (
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 max-w-md mx-auto space-y-4">
            <h3 className="text-xs font-black uppercase text-blue-500 tracking-wider">💳 محرك الاستبدال التلقائي الفوري لـ فودافون كاش</h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="أدخل رقم محفظة فودافون كاش المسجلة" 
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-zinc-900 rounded-xl text-xs text-center font-mono focus:border-blue-500 outline-none"
              />
              <input 
                type="number" 
                placeholder="عدد العملات المراد استبدالها (الحد الأدنى 500)" 
                value={cashoutAmount}
                onChange={(e) => setCashoutAmount(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-zinc-900 rounded-xl text-xs text-center font-mono focus:border-blue-500 outline-none"
              />
              <button 
                onClick={executeInstantCashout}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-xs rounded-xl tracking-wider hover:opacity-90 transition"
              >
                ⚡ استبدال كاش فوري بضغطة زر واحدة
              </button>
            </div>
            {systemMessage && (
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-center text-[11px] rounded-xl animate-pulse">
                {systemMessage}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-zinc-950 border border-zinc-900 px-4 py-2.5 rounded-full backdrop-blur-md flex justify-between items-center text-[10px] text-zinc-400 shadow-2xl z-40">
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> مبروك! كسبت الـ 5 عملات اليومية للتواجد </span>
        <span className="font-mono text-yellow-500 font-bold">+5 Coins</span>
      </div>
    </div>
  );
}

  }

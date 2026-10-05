import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// إعدادات الميتا داتا لدعم الـ PWA وهوية إنيجما الفخمة
export const metadata: Metadata = {
  title: "ENIGMA | المنصة المستقبلية",
  description: "منصة البث المباشر والألعاب ثلاثية الأبعاد الأولى",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ENIGMA",
  },
};

// إعدادات الـ Viewport لضمان أداء سريع وممتاز على الموبايل وبدون تهنيج
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full bg-black text-white antialiased overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-gradient-to-b from-black via-zinc-950 to-black font-sans`}>
        {/* الحاوية الرئيسية لضمان عدم حدوث Black Screen مفاجئ */}
        <main className="flex-grow w-full flex flex-col relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

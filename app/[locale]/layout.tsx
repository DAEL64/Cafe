import "../globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans } from "next/font/google";

//components
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//navigation
import { notFound } from "next/navigation";

//lenis
import { ReactLenis } from "@/utils/lenis";

//intl18
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "../i18n/routing";

//fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafe - demo website",
  description: "Made by hyperjump team",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} antialiased`}
        >
          <NextIntlClientProvider>
            <Header />
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </ReactLenis>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { business, SITE_URL } from "@/lib/config";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Noleggio Autoscale a Torino | Noleggio Autoscale",
    template: `%s | ${business.name}`,
  },
  description:
    "Noleggio autoscale e transenne con operatore a Torino e provincia. Preventivo gratuito in giornata: 320 892 1103.",
  openGraph: {
    siteName: business.name,
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${openSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusinessSchema()} />
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}

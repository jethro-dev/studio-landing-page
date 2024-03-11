import type { Metadata } from "next";
import { Inter, Work_Sans, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { MeshDemo } from "@/components/mesh-demo";
import SmoothScrollingWrapper from "@/components/smooth-scrolling-wrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const work_sans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const montserrat = Montserrat({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const neutralFace = localFont({
  src: "../../public/fonts/NeutralFace.otf",
  display: "swap",
  variable: "--font-neutralFace",
});

const naftaLight = localFont({
  src: "../../public/fonts/NaftaLight.ttf",
  display: "swap",
  variable: "--font-naftaLight",
});

const aesthetic = localFont({
  src: "../../public/fonts/Aesthetic.otf",
  display: "swap",
  variable: "--font-aesthetic",
});

const haverbrooke = localFont({
  src: "../../public/fonts/Haverbrooke.ttf",
  display: "swap",
  variable: "--font-haverbrooke",
});
const anandaBlack = localFont({
  src: "../../public/fonts/AnandaBlack.ttf",
  display: "swap",
  variable: "--font-anandaBlack",
});

export const metadata: Metadata = {
  title: {
    default: "Yee Studio",
    template: "%s - Yee Studio",
  },
  description:
    "Discover Yee Studio – your gateway to transformative digital solutions. Specializing in full-cycle design, development, digital marketing, and branding, we empower your brand to excel in the digital age. Let's create something remarkable together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${inter.variable} ${work_sans.variable} ${neutralFace.variable} ${naftaLight.variable} ${aesthetic.variable} ${haverbrooke.variable} ${anandaBlack.variable} ${montserrat.variable} font-montserrat`}
      >
        <MeshDemo />
        <Navbar />
        <SmoothScrollingWrapper>{children}</SmoothScrollingWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

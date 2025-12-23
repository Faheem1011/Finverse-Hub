import type { Metadata } from "next";
import { Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageLoader from "@/components/ui/PageLoader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  weight: ['400', '700'],
  variable: "--font-libre",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finverse Hub | Master High-Income Skills in the Digital Economy",
  description: "Accelerate your career with Finverse Hub. Master Cybersecurity, 3D Design, AI, and Financial Markets through immersive, mentor-led production studio learning.",
  keywords: ["high-income skills", "cybersecurity course", "3D design academy", "AI masterclass", "financial markets trading", "digital economy", "career accelerator"],
  openGraph: {
    title: "Finverse Hub | Premium Skills Academy",
    description: "Bridge the gap between education and the digital economy. Learn, Build, and Scale your career.",
    url: "https://finversehub.com",
    siteName: "Finverse Hub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${libre.variable} antialiased bg-background text-foreground overflow-x-hidden cursor-none`}
      >
        <PageLoader />
        <CursorProvider>
          <CustomCursor />
          <SmoothScroll />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getHomeContent } from "@/lib/home-content";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const home = getHomeContent();

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  icons: {
    icon: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

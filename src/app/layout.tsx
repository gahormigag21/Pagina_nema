import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Oswald,
  IBM_Plex_Sans,
  Sora,
  Titillium_Web,
} from "next/font/google";
import "./globals.css";
import Providers from "./Providers"; // Import Providers component
import Navbar02Page from "@/components/Layouts/navbar/navbar-02"; // Import Navbar02Page component

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});
export const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-titillium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nema Ingenieria",
  description: "Empresa de Ingeniería Civil",
};
const font = ibmPlex.className;
// const font = titillium.className;
// const font = sora.className;
// const font = oswald.className;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font} antialiased`}>
        <Providers>
          {/* <NavBar /> */}
          <Navbar02Page />
          {children}
        </Providers>
      </body>
    </html>
  );
}

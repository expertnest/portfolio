import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "react-hot-toast";

{ /* import { FloatingDockDemo } from "@/components/ui/FloatingDockDemo"; */}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Miguel's Website Portfolio",
  description: "Welcome to my portfolio! Lets Work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <ThemeProvider
          
          >
            {children}
           {/* < FloatingDockDemo /> */} 
            <Toaster position="top-right" />
          </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import { SearchProvider } from "@/hooks/searchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Namaste India Club",
  description: "NIC by Yoska  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-teal-50`}>
        <main className="container mx-auto flex flex-col justify-start gap-8">
          <SearchProvider>
            <TooltipProvider>
              <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Sidebar />

                {/* Main Content */}
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                  <Header />

                  <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {children}
                  </main>
                </div>
              </div>
            </TooltipProvider>
          </SearchProvider>
        </main>
      </body>
    </html>
  );
}

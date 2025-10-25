// src/app/layout.tsx
// Root layout для Next.js App Router. Темна тема, гумовий дизайн, меню.
// Пояснення: <html class="dark"> для темної теми. Container для responsive (sm:/md:/lg:).
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ark of Life",
  description: "Universal Software Ecosystem project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-ark-black text-white`}>
        <header className="bg-ark-red p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center sm:flex-col sm:gap-4">
            <h1 className="text-xl font-bold">Ark of Life</h1>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4 sm:flex-col sm:space-x-0 sm:space-y-2">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4 flex items-center justify-center">
          {children}
        </main>
        <footer className="bg-ark-red p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 MaxDevStudio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
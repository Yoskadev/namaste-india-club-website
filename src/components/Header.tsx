"use client";

import React, { ChangeEvent } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { PanelLeft, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { navItems } from "@/lib/navigation";
import { useSearch } from "@/hooks/searchContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { setSearchInput } = useSearch();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="https://yoska.in/">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      {/* <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0"> */}
      <Image src="/nic-logo.png" alt="logo" width={45} height={45} />
      {/* </h1> */}
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
    </header>
  );
};

export default Header;

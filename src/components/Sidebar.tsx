"use client";
import { navItems } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link href="https://yoska.in/">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
        </Link>
        {navItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Link
                href={item.link}
                className={
                  pathname === item.link
                    ? "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Package2 className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav> */}
    </aside>
  );
};

export default Sidebar;

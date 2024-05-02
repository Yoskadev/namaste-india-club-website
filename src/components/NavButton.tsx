"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the types for the props
interface NavButtonProps {
  icon: JSX.Element; // You pass the icon as a React element
  title: string; // Title as a string
  to: string; // link as a string
}

const NavButton: React.FC<NavButtonProps> = ({ icon, title, to }) => {
  const pathname = usePathname();
  const isActive = pathname === to;
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className="flex flex-col items-center justify-center p-8"
      asChild
    >
      <Link href={to}>
        <div className="mb-1">{icon}</div>
        <div className="text-xs font-semibold">{title}</div>
      </Link>
    </Button>
  );
};

export default NavButton;

"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Link href="/">
        <Image alt="Logo" src={"/Logon.png"} width={160} height={120} />
      </Link>
      <ul className="md:flex hidden gap-6">
        <li
          className={`hover:text-primary  hover:font-bold cursor-pointer transition-all 
            ${pathname === "/" && "text-primary font-bold"}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold cursor-pointer transition-all 
            ${pathname === "/dashboard" && "text-primary font-bold"}`}
        >
          <Link href="/dashboard">Dashboard</Link>
        </li>
        

        <li
          className={`hover:text-primary hover:font-bold cursor-pointer transition-all 
            ${pathname === "/Howitworks" && "text-primary font-bold"}`}
        >
          <Link href="/Howitworks">How it works?</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold cursor-pointer transition-all`}
        >
          <a
            href="https://www.linkedin.com/in/sahil-bambarkar-7082632b2/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </li>

       
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;

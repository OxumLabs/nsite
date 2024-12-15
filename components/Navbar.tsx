"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showDialog, setShowDialog] = useState(false);

  const NAV_LINKS = [
    { href: "https://github.com/OxumLabs/neit/wiki", key: "docs", label: "Docs", img: "/doc.svg" },
    { href: "#home", key: "home", label: "Product", img: "/logo.svg" },
    { href: "#features", key: "features", label: "Features", img: "/feature.svg" },
    { href: "https://github.com/oxumlabs/neit", key: "source_code", label: "Source Code", img: "/sc.svg" },
  ];

  return (
    <nav className="flex items-center w-full relative z-30 py-5 bg-transparent text-white">
      <Link href="https://oxumlabs.github.io/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex justify-center items-center m-auto">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="relative group flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => link.key === "features" && setShowDialog(true)}
            onMouseLeave={() => link.key === "features" && setShowDialog(false)}
          >
            <Link
              href={link.href}
              className="text-md text-gray-50 pb-1.5 transition-all hover:font-bold flex items-center gap-2"
            >
              <Image src={link.img} alt={link.label} width={20} height={20} />
              {link.label}
            </Link>
            {link.key === "features" && showDialog && (
              <div
                className="absolute top-8 left-0 w-48 bg-gray-800 p-4 rounded shadow-lg z-40"
                onMouseEnter={() => setShowDialog(true)} 
                onMouseLeave={() => setShowDialog(false)}
              >
                <Link
              href="#semiGenengine"
              className="text-md text-gray-50 pb-1.5 transition-all hover:font-bold flex items-center gap-2"
            >
              SemiGen Engine
            </Link>
            <Link
              href="#compiler"
              className="text-md text-gray-50 pb-1.5 transition-all hover:font-bold flex items-center gap-2"
            >
              Compiler
            </Link>
            <Link
              href="#interpreter"
              className="text-md text-gray-50 pb-1.5 transition-all hover:font-bold flex items-center gap-2"
            >
              Interpreter
            </Link>
            <Link
              href="#artificialintelligence"
              className="text-md text-gray-50 pb-1.5 transition-all hover:font-bold flex items-center gap-2"
            >
              Artificial Intelligence
            </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image"; 
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black-100 text-gray-300 py-8 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Image src="/logo.svg" alt="Oxum Labs Logo" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold text-white mb-4">Oxum Labs</h3>
            <p className="text-sm">
              We are a passionate team dedicated to bringing innovative solutions
              to our users. Join us on our journey to make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#home" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#home" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <a href="mailto:oxumlabs@proton.me" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">
              Email: <a href="mailto:oxumlabs@proton.me" className="hover:text-white">oxumlabs@proton.me</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
            </p>
            <p className="text-sm mb-4">
              Address: 123 Main Street, City, Country
            </p>

            <div className="flex space-x-4">
              <Link href="https://github.com/OxumLabs/neit" aria-label="Github" className="hover:text-white">
                <Image src="/github.svg" alt="Github" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-white">
                <Image src="/X.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-white">
                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Oxum Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

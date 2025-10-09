import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">
              Haya Mart
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              An{" "}
              <span className="text-sky-600 font-semibold">
                Islamic Clothing Brand
              </span>
              inspiring <span className="italic">modesty & elegance</span> since
              2025.
            </p>
            <section className="mt-4">
              <div>
                <p className="text-gray-300 font-extrabold text-xl">
                  we accept :
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <Image
                  src="/extray/payment.png"
                  alt="Visa Card"
                  width={290}
                  height={50}
                  className="object-contain "
                />
              </div>
            </section>
            <section>
              <div className="divider divider-primary w-full"></div>
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Haya Mart. All rights reserved.
              </p>
            </section>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

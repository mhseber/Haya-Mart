import Image from "next/image";
import React from "react";
import SocialIcons from "../Or-Components/NavIcons/SocialIcons";

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
              Empowering the Muslim lifestyle since 2025. <br /> Dedicated to
              providing quality products that align <br /> with faith, culture,
              and modern living
            </p>
            <section className="mt-8">
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
                © {new Date().getFullYear()}{" "}
                <span className="to-blue-400">Haya Mart</span>. All rights
                reserved.
              </p>
            </section>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Investment</a>
          <a className="link link-hover">Track Order</a>
          <a className="link link-hover">Store Locator</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Return and Exchange</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact us</h6>
          <a className="link link-hover">+88017998894176</a>
          <a className="link link-hover">sebermh@gmail.com</a>
          <div className="mt-4">
            <h6 className="footer-title">Follow Us</h6>
            <p>
              <SocialIcons />
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

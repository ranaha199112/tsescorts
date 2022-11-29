import Image from "next/image";
import Certificate1 from "../public/images/asacp.gif";
import Certificate2 from "../public/images/rta.gif";

function Footer() {
  return (
    <div className="bg-gray-200/10">
      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-0 text-[15px] lg:text-[14px] border-b">
        <div className="lg:px-3 pt-2 pb-0">
          <h3 className="text-custom-blue2 text-[20px] md:text-[17px] uppercase">
            Information
          </h3>
          <ul className="mt-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
            <li>Advertise</li>
            <li>Report Trafficking</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="px-3 pt-3 pb-1 border-l">
          <h3 className="text-custom-blue2 text-[20px] md:text-[17px] uppercase leading-5">
            TERMS & REFERENCES
          </h3>
          <ul className="mt-2">
            <li>Transsexual</li>
            <li>Tranny</li>
            <li>Transvestite</li>
            <li>Transgender</li>
            <li>Shemale Reference</li>
          </ul>
        </div>
        <div className="lg:px-3 pt-2 pb-0 lg:col-span-3 lg:border-l">
          <h3 className="text-custom-blue2 text-[20px] md:text-[17px] uppercase">
            Locations
          </h3>
          <div className="">
            <p className="text-[13px]">
              Don&apos;t see your location ? Don&apos;t worry new location being
              added or recommend a location to us HERE.
            </p>

            <p className="mt-4 leading-[2.5] text-[16px] lg:text-[14px] lg:leading-snug">
              Atlanta · Austin · Baltimore · Baton Rouge · Birmingham · Boston ·
              Charlotte · Chicago · Cincinatti · Cleveland · Columbus · Dallas ·
              Denver · Detroit · Fort Lauderdale · Fort Worth · Houston ·
              Indianapolis · Kansas City · Las Vegas · Los Angeles · Louisville
              · Miami · Minneapolis · Montgomery · Montreal · Nashville · New
              Orleans · New York · Oklahoma City · Orlando · Philadelphia ·
              Phoenix · Pittsburgh · Portland · Raleigh · Richmond · Sacramento
              · San Antonio · San Diego · San Francisco · Seattle · St. Louis ·
              Tampa · Washington DC · Wichita
            </p>
            <p className="mt-[30px] lg:mt-[12px] leading-[2.5] text-[16px] lg:text-[14px] lg:leading-snug">
              Bangkok · Dubai · Hong Kong · London · Manila · Montreal ·
              Singapore · Toronto · Vancouver
            </p>
          </div>
        </div>
        <div className="px-3 pt-2 pb-0 flex flex-col lg:items-center border-l">
          <h3 className="text-custom-blue2 text-[20px] md:text-[17px] uppercase">
            Certificates
          </h3>

          <Image src={Certificate1} alt="certificate1" className="mt-2" />
          <Image
            src={Certificate2}
            alt="certificate2"
            className="mt-6 lg:mt-2"
          />
        </div>
      </div>
      <div className="py-[6px] bg-gray-100 lg:bg-transparent flex flex-col lg:flex-row justify-center text-[15px] lg:text-[10px] text-center text-custom-blue2 leading-[2.5]">
        <span>©2017 www.TSescorts.com |</span>
        <span>Privacy Policy | Terms Of Use |</span>
        <span>2257 Notice | Report Trafficking</span>
      </div>
    </div>
  );
}

export default Footer;

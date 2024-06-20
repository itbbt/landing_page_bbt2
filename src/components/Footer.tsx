import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
    
    <div className=" bg-[#545454] w-full text-white py-6 bottom-0 justify-between flex flex-col-reverse md:flex-row px-11 items-center">
      <div className="flex md:flex-none flex-col items-center md:items-baseline">
        <div className="w-32 bg-white p-1 rounded-sm md:mb-11 mb-6 ">
          <img src="/assets/logo-bbt.png" alt="" />
        </div>
        <p className="text-sm text-center md:text-left">
          Copyright Buana Biru Teknindo © 2023
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-32 md:px-11 mb-6 md:mb-0 ">
        <div className="text-center md:text-left">
          <p className="font-bold mb-1 ">MENU</p>
          <div>
            <Link href={"/"}>
              <p>Beranda</p>
            </Link>
            <Link href={"/about-us"}>
              <p>Tentang Kami</p>
            </Link>
            <Link href={"/vision-mision"}>
              <p>Visi & Misi</p>
            </Link>
            <Link href={"/our-services"}>
              <p>Layanan</p>
            </Link>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-bold mb-1 ">KONTAK</p>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex gap-2">
              <img src="/assets/icon-email.png" alt="" width={20} />
              <a href="mailto:info@spidertrac.co.id">info@spidertrac.co.id</a>
            </div>
            <div className="flex gap-2">
              <img src="/assets/icon-wa.png" alt="" width={20} />
              <a href="https://api.whatsapp.com/send?phone=6281310381005" target='_blank'>+62 813-1038-1005</a>
            </div>
            <div className="flex gap-2">
              <img src="/assets/icon-address.png" alt="" width={20} />
                <p className="m-0">Permata Cimanggis Cluster Alexandrite Blok N11/19, Kota Depok 16458</p>
            </div>
            <div className="flex gap-2">
              <img src="/assets/icon-vo.png" alt="" width={18} />
              <p className="m-0">(Virtual Office)</p>
              <p className="m-0">Ruko Verbena, Jalan Boulevard Grand Depok City No. 9 - 16412</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;

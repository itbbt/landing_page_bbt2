"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname= usePathname();

  return (
    <>
    
    <div className="sticky top-0 z-50 sm:h-20 bg-white flex flex-col sm:flex-row justify-between px-11 items-center text-[#1172B8] shadow-navbar">
      <Link href={"/"}>
        <div className="w-32 py-2 sm:py-0">
          <img src="/assets/logo-bbt.png" alt="" />
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 py-2 sm:py-0">
        <Link href={"/"}>
          <p className={pathname === "/" ? "font-bold" : ""}>
            Beranda
          </p>
        </Link>
        <Link href={"/layanan"}>
          <p
            className={pathname === "/layanan" ? "font-bold" : ""}
          >
            Layanan
          </p>
        </Link>
        <Link href={"/#about-us"}>
          <p className={pathname === "/#about-us" ? "font-bold" : ""}>
            Tentang Kami
          </p>
        </Link>
        <a href={"/#vision-mision"}>
          <p
            className={
              pathname === "/#vision-mision" ? "font-bold" : ""
            }
          >
            Visi & Misi
          </p>
        </a>
        <a href={"/#contact-us"}>
          <p
            className={
              pathname === "/#contact-us" ? "font-bold" : ""
            }
          >
            Kontak
          </p>
        </a>
        {/* <Link href={"/about-us"}>
          <p className={pathname === "/about-us" ? "font-bold" : ""}>
            Tentang Kami
          </p>
        </Link> */}
        {/* <Link href={"/vision-mision"}>
          <p
            className={
              pathname === "/vision-mision" ? "font-bold" : ""
            }
          >
            Visi & Misi
          </p>
        </Link> */}
      </div>
    </div>
    </>
  );
}

export default Navbar;

import Image from "next/image";
import { BiLogoXing } from "react-icons/bi";
import { FaStudiovinari } from "react-icons/fa";
import img from "@/app/sections/welcome/avatar/avatar5.svg"

export default function Avatar() {
  return (
    <section className="w-full flex justify-center items-center hover:scale-110 transition-transform">
       <BiLogoXing size={100} className="text-blue-950"/>
        <Image 
            alt="avatar"
            src={img}
            quality={100}
            priority
            className=""
        />
       <BiLogoXing size={100} className="text-blue-950"/>
    </section>
  )
}

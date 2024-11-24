"use client"

import Link from 'next/link'
import { AiFillHome, AiOutlineCodeSandbox } from 'react-icons/ai'
import { FaBuffer } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { Logo } from './logo/Logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BsWhatsapp } from 'react-icons/bs'
import Image from 'next/image'
import waveTop from "@/app/header/wavestop.svg"
import { BiChip, BiSolidCat } from 'react-icons/bi'


export function Header() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511952393937"

  return (
    <>
        <header className="w-full flex items-center px-2 py-4 bg-slate-900 h-40 shadow-sm ">
            <div className=" space-x-4 w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/" className="hover:scale-110 transition-transform">
                    {/* <Logo /> */}
                </Link>
                <Link href="/">
                    <h1 className="text-white   hover:tracking-widest duration-300 font-extrabold antialiased text-2xl">
                        <BiSolidCat size={26}/>
                        <span className="text-sky-400 text-3xl">TRX</span>SZ
                    </h1>
                </Link>
            <div className="flex font-bold space-x-16 align-baseline items-center bg-slate-800 rounded-3xl px-10 py-3 ">
            
                <Link
                    href="/"
                    className="flex text-slate-400 gap-1 items-center hover:text-orange-500 duration-300 hover:scale-110 transition-transform"
                > 
                    <AiFillHome size={26} className=""/>
                    <p className=" hover:text-sky-500 duration-300">Home</p>
                </Link>
           
                <Link
                    href="/"
                    className="flex text-slate-400 gap-1 items-center hover:text-orange-500 duration-300 hover:scale-110 transition-transform"
                > 
                    <FaBuffer size={26} className=""/>
                    <p className=" hover:text-sky-500 duration-300">My Projects</p>
                </Link>
                <Link
                    href="/"
                    className="flex text-slate-400 gap-1 items-center hover:text-orange-500 duration-300 hover:scale-110 transition-transform"
                > 
                    <GiSkills size={26} className=""/>
                    <p className=" hover:text-sky-500 duration-300">Experience</p>
                </Link>
                <Link
                    href="/"
                    className="flex text-slate-400 gap-1 items-center hover:text-orange-500 duration-300 hover:scale-110 transition-transform"
                > 
                    <AiOutlineCodeSandbox size={26} className=""/>
                    <p className=" hover:text-sky-500 duration-300">Skills</p>
                </Link>

            </div>
            <Link href={whatsapp} target="_blank" className="flex gap-2 hover:scale-110 transition-transform" >
                <Avatar className="shadow shadown shadow-cyan-500">
                <AvatarImage src="https://github.com/tricia-sz.png" />
                <AvatarFallback>TS</AvatarFallback>
                </Avatar>
                <BsWhatsapp size={26} color='#42f56c' />
            </Link>
            </div>
      </header>
      <Image 
        src={waveTop} 
        className="w-full" 
        alt="waveTop"
       />
    </>
  )
}
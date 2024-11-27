import Image from "next/image";
import Link from 'next/link';
import { BiRightArrowCircle } from "react-icons/bi";
import camping from "@/app/sections/myprojects/img/camping.png"
import agua from "@/app/sections/myprojects/img/agua.png"
import montanhas from "@/app/sections/myprojects/img/montanhas.png"
import pychat from "@/app/sections/myprojects/img/pychat.png"
import head from "@/app/sections/myprojects/img/head.png"
import pyautogui from "@/app/sections/myprojects/img/pyautogui.png"
import pyins from "@/app/sections/myprojects/img/pyins.png"
import cabrita from "@/app/sections/myprojects/img/cabrita.png"


export default function ProjectCards() {
  return (
    <>
      <Link href={""}>
        <section className='w-full bg-slate-950 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>

          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={camping}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Camping Parallax Landing Page
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={agua}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
            Water Drop Effect Card 
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={cabrita}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Goat Studios Site of Games
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={pyins}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Python - Cancellation Analysis
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={head}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Trx Headphone Landing Page
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={pychat}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Python - WhatsChat
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={pyautogui}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Py - Registration Automation
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
      <Link href={""}>
        <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
          <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
              <Image
                className='rouded-lg object-cover'
                src={montanhas}
                alt={""}
                quality={100}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
                style={{ borderRadius: '2%' }}
              />
            </div>
          <div className='flex items-center mt-4 justify-between'>
            <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
              Mountain Parallax
            </p>
            <BiRightArrowCircle size={24} color='#cfeaff' />
          </div>
        </section>
      </Link>
    </>
  );
}


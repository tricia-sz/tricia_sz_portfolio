// import AboutMe from "../AboutMe/About";
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

interface TitleTwoProps {
    title: string | ""
}

export default function TitleThree({title}:TitleTwoProps) {

  return (
   
    <section className="w-full   text-center items-center  justify-center">
          <div  className={inter.className}>
            <h2 className="text-6xl -tracking-tighter leading-10 opacity-100 font-black ">{title}</h2>
          </div>
        <div className={inter.className}>
            <div className="w-full rounded-full  h-24 bg-gradient-to-r from-orange-600 to-blue-700 blur-3xl ">
            </div>
        </div>
    </section>
  )
}

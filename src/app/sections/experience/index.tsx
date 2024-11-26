// import AboutMe from "../AboutMe/About";
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    // display: 'swap',
    variable: '--font-inter',
});

export default function Experience() {
    

  return (
      <section className="w-full  h-screen text-center items-center mt-1 justify-center ">
        <div className={inter.className}>
            <div className="w-full rounded-full  h-24 bg-gradient-to-r from-sky-600 to-pink-700 blur-3xl">
            </div>
          <h2 className="text-6xl -tracking-tighter leading-10 opacity-100 font-extrabold">2+ YEARS XP</h2>
        </div>
      
     </section>
  )
}

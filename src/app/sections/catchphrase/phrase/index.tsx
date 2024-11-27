// import AboutMe from "../AboutMe/About";
import { Josefin_Sans, Inter } from 'next/font/google'
import Avatar from './avatar';

const josefin = Josefin_Sans({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    // display: 'swap',
    variable: '--font-jose',
});

const inter = Inter({
    weight: [ '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    // display: 'swap',
    variable: '--font-inter',
});


export function Phrase() {
    

  return (
    <section className="max-w-screen-xl mx-auto text-center items-center font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-indigo-500 from-15 % via-indigo-500 via-50% to-indigo-400 to-80%">
        <main className={inter.className}>
            <h2 className="flex text-7xl space-x-10">
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 from-20% via-indigo-400 via-40% to-purple-600 to-60%">
                MY PROJECTS
            </span>
        </h2>
        {/* <Avatar /> */}

        </main>
      
     </section>
  )
}

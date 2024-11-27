// import AboutMe from "../AboutMe/About";
import { Josefin_Sans } from 'next/font/google'
import Avatar from './avatar';

const josefin = Josefin_Sans({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    // display: 'swap',
    variable: '--font-jose',
});

export function Welcome() {
    

  return (
    <section className="max-w-screen-xl mx-auto text-center items-center font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 from-15 % via-blue-500 via-50% to-blue-400 to-80%">
        <main className={josefin.className}>
            <h2 className="text-8xl space-x-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-100 from-20% via-cyan-400 via-40% to-sky-600 to-60%">
                    Welcome!
                </span>
                <span className="text-transparent  bg-clip-text bg-gradient-to-tr from-blue-200 from-10% via-blue-100 via-40% to-sky-500 to-90%">
                    I'm 
                </span>
             </h2>
             <h2 className="text-8xl space-x-10 mb-10 tracking-normal mt-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-200 from-10% via-cyan-100 via-40% to-sky-500 to-90%">
                     Patrícia,
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-500 from-10% via-cyan-500 via-30% to-sky-300 to-80%">
                     Web 
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 from-10% via-cyan-400 via-30% to-blue-900 to-90%">
                    Developer
                </span>
             </h2>
        </main>
        <Avatar />
     </section>
  )
}

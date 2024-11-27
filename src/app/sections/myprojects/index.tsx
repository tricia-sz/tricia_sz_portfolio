'use client'
import { Container } from "@/app/components/container"
import TitleTwo from "../../components/titletwo"
import ProjectCards from "./projectcard"
import TitleThree from "@/app/components/titlethree"
import img from "@/app/sections/contact/img/robot.svg"
import Image from "next/image"



export default function MyProjects() {
 
  return (
    <Container>
     <div className="items-center flex-initial flex space-y-44">

        <div className="w-full flex items-center justify-center" >
            <Image 
                src={img} 
                alt="contact" 
                quality={100}  
                className=""
             />
        </div>
            <TitleTwo title="MY PROJECTS" className=""/>
     </div>
     {/* <TitleTwo title="MY PROJECTS"/> */}
     
      <section className='bg-slate-950 grid gap-7 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        <ProjectCards/>
      </section>
      
    </Container>
  )
}

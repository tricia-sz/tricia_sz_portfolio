'use client'
import { Container } from "@/app/components/container"
import Title from "../title"
import ProjectCards from "./ProjectCard"
import TitleTwo from "../titletwo"

export default function MyProjects() {
 
  return (
    <Container>
     <TitleTwo title="MY PROJECTS"/>
      <section className='bg-slate-950 grid gap-7 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        <ProjectCards/>
      </section>
    </Container>
  )
}

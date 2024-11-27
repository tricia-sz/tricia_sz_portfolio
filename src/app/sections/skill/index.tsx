import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoDocker, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs, SiPython } from "react-icons/si";
import { Container } from "@/app/components/container";
import Title from "../../components/titleone";

import Image from "next/image";

export function Skills() {
  return (
    <Container>
     
        {/* <Title title="SKILLS"/> */}
      <div className="flex flex-wrap justify-between text-blue-950 mt-16 mb-32 ">
        <div className="text-orange-600 justify-center text-center  hover:text-amber-700 hover:scale-110 transition-transform">
          <AiFillHtml5 className="" size={100}/>
          <span>HTML5</span>
        </div>
        <div className="text-blue-500 justify-center text-center hover:text-blue-500 hover:scale-110 transition-transform">
          <FaCss3Alt className="" size={100}/>
          <span>CSS</span>
        </div>
        <div className="text-yellow-300 justify-center text-center hover:text-yellow-300 hover:scale-110 transition-transform">
          <BiLogoJavascript className="" size={100}/>
          <span>JavaScript</span>
        </div>
        <div className="text-cyan-500 justify-center text-center hover:text-cyan-500 hover:scale-110 transition-transform">
          <FaReact className="" size={100}/>
          <span>React JS</span>
        </div>
        <div className="text-blue-600 justify-center text-center hover:text-blue-600 hover:scale-110 transition-transform">
          <TbBrandNextjs className="" size={100}/>
          <span>Next JS</span>
        </div>
        {/* <div className="text-slate-600 justify-center text-center hover:text-violet-500">
          <BiLogoTailwindCss className="" size={100}/>
          <span>tailwind CSS</span>
        </div> */}
        <div className="text-green-600 justify-center text-center hover:text-green-600 hover:scale-110 transition-transform"  >
          <FaNodeJs className="" size={100}/>
          <span>Node JS</span>
        </div>
        <div className="text-red-500 justify-center text-center hover:text-red-500 hover:scale-110 transition-transform">
          <SiNestjs className="" size={100}/>
          <span>Nest JS</span>
        </div>
        <div className="text-yellow-300 justify-center text-center hover:text-yellow-300 hover:scale-110 transition-transform">
          <SiPython className="" size={100}/>
          <span>Python</span>
        </div>
        <div className="text-blue-800 justify-center text-center hover:text-blue-800 hover:scale-110 transition-transform  ">
          <BiLogoPostgresql className="" size={100}/>
          <span>PostgreSQL</span>
        </div>
        <div className="text-sky-500 justify-center text-center hover:text-sky-500 hover:scale-110 transition-transform  ">
          <BiLogoDocker className="" size={100}/>
          <span>Docker</span>
        </div>
      </div>
    </Container>
    
  )
}
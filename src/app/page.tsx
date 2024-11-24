import Image from "next/image";
import { Welcome } from "./sections/welcome";
import avatar from "@/app/sections/AboutMe/avatar2.png"


export default function Home() {
    
  return (
    <main className="flex items-center flex-col justify-center">
        <Welcome />
    </main>
  );
}

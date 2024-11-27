import CatchPhrase from "./sections/catchphrase";
import Contact from "./sections/contact";
import { Experience } from "./sections/experience";
import MyProjects from "./sections/myprojects";
import { Skills } from "./sections/skill";
import { Welcome } from "./sections/welcome";


export default function Home() {
    
  return (
    <main className="flex items-center flex-col justify-center">
        <Welcome />
        <Experience />
        <Skills />
        {/* <CatchPhrase /> */}
        <MyProjects />
        <Contact />
        {/* <TitleFour title="TESTE"/> */}


    </main>
  );
}

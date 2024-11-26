import { Experience } from "./sections/Experience/Experience";
import MyProjects from "./sections/MyProjects/MyProjects";
import { Skills } from "./sections/Skills/Skills";
import Title from "./sections/title";
import TitleTwo from "./sections/titletwo";
import { Welcome } from "./sections/welcome";


export default function Home() {
    
  return (
    <main className="flex items-center flex-col justify-center">
        <Welcome />
        <Experience />
        <Skills />
        <MyProjects />


    </main>
  );
}

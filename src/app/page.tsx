import Experience from "./sections/experience";
import { Welcome } from "./sections/welcome";


export default function Home() {
    
  return (
    <main className="flex items-center flex-col justify-center">
        <Welcome />
        <Experience />
    </main>
  );
}

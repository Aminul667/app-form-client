import CodeExample from "@/components/Shared/Pages/Home/CodeExample";
import Features from "@/components/Shared/Pages/Home/Features";
import Hero from "@/components/Shared/Pages/Home/Hero";
import Instalation from "@/components/Shared/Pages/Home/Instalation";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CodeExample />
      <Features />
      <Instalation />
    </div>
  );
}

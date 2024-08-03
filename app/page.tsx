import Image from "next/image";
import {Button} from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Blog from "./_components/Blog";
import About from "./_components/About";
import Services from "./_components/Services";
import Learn from "./_components/Learn";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Learn/>
      <Blog/>
      <Footer/>
    </div>
  );
}

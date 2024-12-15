import Hero from "@/components/Hero";
import Code from "@/components/Code";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Circle from "@/components/Circle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
        <Code />
      </div>
      <div className="max-w-9xl w-full">
        <div className="absolute z-[0] -left-4 bottom-[30%] w-[250px] h-[250px] rounded-full bg-pink-gradient blur-[150px]" />
        <Features />
      </div>
      <div className="max-w-7xl w-full">
        <CTA />
        <Circle />
      </div>
    </main>
    <Footer />
    </>
  );
}

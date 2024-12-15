import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-20" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <Spotlight
          className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 right-full"
          fill="purple"
        />
        <Spotlight className="right-0 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="The language of the Future, NEiT"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-blue-100"
          />
          <p className=" text-blue-100 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Faster than your morning coffee and smarter than your pet hamster.
          </p>
          <div className="flex justify-evenly w-[80%] items-center flex-wrap gap-2">
            <Link href="https://oxumlabs.github.io/">
              <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-1">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-3 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                  Oxum Labs
                </span>
              </button>
            </Link>
            <Link href="https://github.com/OxumLabs/neit/wiki">
              <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-1">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-3 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

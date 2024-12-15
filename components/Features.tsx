import React from "react";
import { NeonGradientCard } from "./ui/NeonGradientCard";
import Image from "next/image";

const Features = () => {
  const FEATURES = [
    {
      index: 1,
      id: "semiGenengine",
      link: "",
      heading: "Semigen Engine",
      text: "At the heart of Neit lies the Semigen engine, which is basically a magic wand for code! It lets you bend the language' syntax to your will.",
      img: "/semigen.png",
    },
    {
      index: 2,
      id: "compiler",
      link: "",
      heading: "Compiler",
      text: "Neit has not just one, but a super-powered compiler! It churns out clean, high-performance C code, uses Clang for next-level optimizations.",
      img: "/fast.png",
    },
    {
      index: 3,
      id: "interpreter",
      link: "",
      heading: "Interpreter",
      text: "Rust-based interpreter is a super-powered interpreter for Neit, having a portable, pocket-sized Neit-runner that fits snugly in your metaphorical pocket. Just fire it up and you’re ready to run your code like a pro.",
      img: "/rust.png",
    },
    {
      index: 4,
      id: "artificialintelligence",
      link: "",
      heading: "Artificial Intelligence",
      text: "Coding isn’t just about typing endless lines of text—it’s about creating tools that make your life easier. With Neit, you get the freedom to craft your perfect coding experience.",
      img: "",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center" id="features">
      <h2 className="text-5xl font-bold text-purple mt-20"> Features</h2>
      {FEATURES.map((data) => (
        <div
          className="flex flex-col lg:flex-row items-center justify-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-auto py-16"
          key={data.index} id={data.id}
        >
          {data.index === 1 || data.index === 3 ? (
            <>
              <div className="flex flex-col items-left justify-center text-left mb-8 space-y-4 space-x-4">
                <h4 className="text-3xl font-semibold text-white pl-4">
                  {data.heading}
                </h4>
                <p className="text-lg text-white">{data.text}</p>
                <button className="px-8 py-2 rounded-md bg-transparent text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-purple w-fit">
                  Learn More
                </button>
              </div>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#CBACF9] from-35% to-[#E4ECFF] bg-clip-text text-5xl sm:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  <Image
                    src={data.img}
                    alt="Feature Image"
                    height={10}
                    width={10}
                    className="w-[100%] h-[100%]"
                  />
                </span>
              </NeonGradientCard>
            </>
          ) : data.index === 2 || data.index === 4 ? (
            <>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#CBACF9] from-35% to-[#E4ECFF] bg-clip-text text-5xl sm:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  {data.index === 4 ? (
                    <video
                      className="w-[100%] h-[100%]"
                      src="/ai.mp4"
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <Image
                      src={data.img}
                      alt="Feature Image"
                      height={10}
                      width={10}
                      className="w-[100%] h-[100%]"
                    />
                  )}
                </span>
              </NeonGradientCard>
              <div className="flex flex-col items-left justify-center text-left mb-8 space-y-4 space-x-4">
                <h4 className="text-3xl font-semibold text-white pl-4">
                  {data.heading}
                </h4>
                <p className="text-lg text-white">{data.text}</p>
                <button className="px-8 py-2 rounded-md bg-transparent text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-purple w-fit">
                  Learn More
                </button>
              </div>
            </>
          ) : null}
        </div>
      ))}
    </section>
  );
};

export default Features;

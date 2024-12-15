import React from "react";
import { OrbitingCircles } from "./ui/OrbitingCircles";
import Image from "next/image";

const Circle = () => {
  return (
    <div className="mt-20 flex justify-center items-center h-[50vh]">
      <span className="z-10 absolute text-center text-8xl font-semibold leading-none text-white">
        NEiT
      </span>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src="/OxumLabs.png" alt="Oxum Labs" className="w-full h-full" height={100} width={100} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src="/ai.svg" alt="AI" className="w-full h-full" height={100} width={100} />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Image src="/fast.svg" alt="Fast" className="w-full h-full" height={100} width={100} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Image src="/rust.svg" alt="Rust" className="w-full h-full" height={100} width={100} />
      </OrbitingCircles>
    </div>
  );
};

export default Circle;

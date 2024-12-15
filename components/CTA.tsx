import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="text-blue-100 w-[100%] flex justify-between items-center circular-gradient rounded-2xl lg:flex-row flex-col">
      <div className="flex flex-col p-10">
        <p>Neit is still in pre-alpha, but don’t let that stop you!</p>
        <h6 className="text-2xl font-bold p-2">Start Coding</h6>
      </div>
      <Link href="https://github.com/OxumLabs/neit/wiki">
        <button className="px-8 py-2 rounded-md bg-transparent text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-purple w-fit m-10">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default CTA;

import Globe from "./magicui/globe";
import React from "react";

export function Globes() {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px] px-40 pt-8 pb-40 overflow-hidden  rounded-lg bg-background md:pb-60 ">
      <span className="font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl dark:from-white dark:to-slate-900/10">
        CoderXen world
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}

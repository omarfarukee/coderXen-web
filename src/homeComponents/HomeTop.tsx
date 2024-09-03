
import React from "react"
import BlurIn from './../../@/components/magicui/blur-in';
import WordRotate from "../components/WordRoate";
import {  AnimatedBeamMultipleOutputDemo } from "../components/AnimatedBeam";
import RetroGrid from "../components/RetroGrid";
import IconCloud from "../components/IconCloud";

const words = ["hello", "world",]
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function HomeTop() {

  return (
    <div>
      <BlurIn word={"Hello World"}></BlurIn>
      
     <AnimatedBeamMultipleOutputDemo/>
     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
      <WordRotate className="text-5xl text-green-300" words={words}/>
      </span>
 
      <RetroGrid />
    </div>
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
    </div>
  )
}

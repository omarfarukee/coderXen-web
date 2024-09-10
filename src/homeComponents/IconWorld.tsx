
import React from "react"
import IconCloud from "../components/IconCloud";

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

export default function IconWorld() {

  return (
    <div>
      
      <div className="relative flex h-full w-[100%] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <div className="absolute flex flex-col items-center justify-center text-center" >
        <h1 className="text-[9em] text-[#0000000c] " data-aos="fade-up" data-aos-duration="3000">global Top</h1>
        <h1 className="text-[9em] text-[#0000000c] " data-aos="fade-up" data-aos-duration="3000">technologies</h1>
        <p className="w-[70%] text-[#00000021]" data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit, beatae pariatur inventore ullam vitae distinctio quas odit quibusdam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, delectus illum atque minus repellat voluptate error at illo soluta!</p>
       </div>
       <div className="z-10 mt-[50vh]" data-aos="zoom-in" data-aos-duration="3000">
         <IconCloud iconSlugs={slugs} />
       </div>
       
      </div>
    </div>
  )
}

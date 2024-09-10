import Marquee from "../components/Marquee";
import { cn } from "../lib/utils";
import React from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://pikwizard.com/pw/medium/0d12c7cfe4b4f928847f36f5ec83f20f.jpg",
    coder:"coder"
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://pikwizard.com/pw/medium/0d12c7cfe4b4f928847f36f5ec83f20f.jpg",
    coder:"Xen"
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  coder
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  coder:string
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border border-black p-4 hover:bg-[#2694c718] backdrop-blur-[4px]",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      >
      <div className="flex flex-row items-center gap-2" >
        <img className="hidden rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col hidden">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
        <h1 className="items-center justify-center w-full text-3xl text-center mt-[40px] text-[#2694c7]">{coder}</h1>
      </div>
      <blockquote className="hidden mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function VerticalMarquee() {
  return (
 
        
         <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
          <h1 className="absolute text-[11em] uppercase text-[#00000017]" data-aos="zoom-in" data-aos-duration="3000">CoderXen</h1>
         <div className="w-[30%] mr-10 hidden">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, consectetur? Corrupti eum fugiat magni aliquid maxime ex laudantium autem quo?</p>
        </div>
      <Marquee pauseOnHover vertical className="[--duration:20s]" >
        {firstRow.map((review) => (
         <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="w-[30%] ml-10 flex flex-col text-end hidden">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, consectetur? Corrupti eum fugiat magni aliquid maxime ex laudantium autem quo?</p>
        </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
   
  );
}

"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    thumbnail:string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden font-Raleway",
        className
      )}
    >
      <h1 className="text-black text-2xl sm:text-4xl font-bold mb-10 py-4 mt-5 flex items-center justify-center uppercase">Our Services</h1>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className=" w-[350px] max-w-full relative rounded-2xl shadow-md flex-shrink-0  px-8 py-6 md:w-[450px]"
            style={{
              background:
                "white",
            }}
            key={item.name}
          >
            <blockquote>
              <div id="services"
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_30px)] w-[calc(100%_+_4px)]"
              ></div>
              <img className="object-cover rounded-2xl" src={item.thumbnail} alt="" />
              <p className="mt-5 relative z-20 text-sm leading-[1.6] text-black font-Raleway">
                {item.quote}
              </p>
              <div className="relative mt-6 z-20  flex flex-col gap-2 text-left "> 
                  <p className=" uppercase text-sm leading-[1.6] text-black/50 font-Raleway">
                    {item.name}
                  </p>
                  <button className="w-[150px] hover:bg-white hover:text-black hover:shadow-lg text-white bg-black/95 font-Raleway rounded-xl px-2 py-2 hover:scale-105 transition duration-300">Get started</button>  
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

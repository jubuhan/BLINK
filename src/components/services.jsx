"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";


export default function InfiniteMovingCardsDemo() {
  return (
    
    <div id="services" className="py-4">
            <div className="px-6">
              <div className="h-auto flex flex-col antialiased dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="slow"
                  
              />
              </div>
            </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Visual acuity (VA) is a measure of the ability of the eye to distinguish shapes and the details of objects at a given distance.",
    name: "Visual acuity",
    title: "A Tale of Two Cities",
    thumbnail:"https://img.freepik.com/free-photo/doctor-testing-patient-eyesight_23-2149230016.jpg?t=st=1711608969~exp=1711612569~hmac=6b729ee7c64dfd9156e13718f0f2de5502cf35dd078e1bf718311d12525a9536&w=1380",
  },
  {
    quote:
      "The goal of treating astigmatism is to improve vision clarity and eye comfort.Regular astigmatism is predictable and well understood.",
    name: "Astigmatism",
    title: "Hamlet",
    thumbnail:"https://img.freepik.com/free-photo/man-having-eye-sight-check-ophthalmology-clinic_23-2149082460.jpg?t=st=1711608203~exp=1711611803~hmac=ae08fb2dd25ae383b2c75908f173d931eeb4836ce76950d29533860f2fefaf14&w=1380",
  },
  {
    quote: "Eye exercises are designed to strengthen your eye muscles, help you focus, ease eye movements, and stimulate your brain's vision center.",
    name: "Eye excersize",
    title: "A Dream Within a Dream",
    thumbnail:"https://img.freepik.com/free-photo/full-shot-woman-practicing-facial-yoga_23-2150251821.jpg?t=st=1711609095~exp=1711612695~hmac=23b7767e8811517f638b01366afa01c0008a0672a0bae2a572c6b6b265a301cf&w=1380",
  },
  {
    quote:
      "This is a simple looking but insanely challenging color quiz that tests your eyes ability to differentiate shades of color.Get ready for a thrilling and challenging game.",
    name: "Color cube game",
    title: "Pride and Prejudice",
    thumbnail:"https://img.freepik.com/free-photo/graphic-concept-with-colorful-wood-blocks_23-2148950411.jpg?t=st=1711608043~exp=1711611643~hmac=964c6cba356d8b6b35938268d753cb92f82abeb7894cbcb9b746c2bb6a286b8e&w=1380",
  },
  {
    quote:
      "A color vision test checks your ability to distinguish between different colors. Color blindness is the inability to distinguish the differences between certain colors.",
    name: "Color Blindness",
    title: "Moby-Dick",
    thumbnail:"https://img.freepik.com/free-photo/beautiful-young-woman-portrait-wearing-her-hair-up-isolated_273609-48214.jpg?t=st=1711609217~exp=1711612817~hmac=23ac81a20c6ce09a9529a33d7db1518fc5e2b5de526afd88e77634c7db5b18ae&w=1380",
  },
];

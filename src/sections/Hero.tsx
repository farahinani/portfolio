/* eslint-disable react/no-unescaped-entities */

import memojiImage from "@/assets/images/farah-memoji-computer.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";
import { ProjectsSection } from "./Projects";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* for the orbit stars */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        {/* for the background grain bg + ring + star */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* outer border is to set the size of the orbit; distance from the center of the hero */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-fuchsia-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-fuchsia-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-fuchsia-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-fuchsia-300/20" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-fuchsia-300" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-fuchsia-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-fuschia-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
          <SparkleIcon className="size-14 text-fuschia-300/20" shouldSpin spinDuration="3s" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-fuschia-300/20" />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-fuchsia-300" />
        </HeroOrbit>

      </div>

      {/* for the content */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="memoji image" />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            {/* ping */}
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available for new projectsssss
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              {/* tracking-wide : utility class that increases the letter spacing of text to 0.025em. This adds a little more space between characters than the default tracking-normal */}
              {/* Building Exceptional User Experiences */}
              Crafting Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              {/* I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project. */}
              I transform given designs into reliable, <br />high-performance web applications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">

            <Link href="#projects">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
            </Link>

            <Link href="#contact">
              <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                <span>👋</span>
                <span className="font-semibold">
                  Let's Connect
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

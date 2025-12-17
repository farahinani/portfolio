"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { useRef } from "react";
import chatbotWebsite from "@/assets/images/chatbot-landing-page.png";
import youtubeWebsite from "@/assets/images/youtube-landing-page.png";
import ecommerceWebsite from "@/assets/images/ecommerce-landing-page.png";
import mohitoWebsite from "@/assets/images/mohito-landing-page.png";
import { OverlayHover } from "@/components/OverlayHover";



const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: "5%"
  },
  {
    title: 'Travel',
    emoji: '✈️',
    left: "50%",
    top: "5%"
  },
  {
    title: 'Baking',
    emoji: '🍪',
    left: "35%",
    top: "40%"
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "10%",
    top: "35%"
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: "70%",
    top: "45%"
  },
  {
    title: 'Shopping',
    emoji: '🛍️',
    left: "5%",
    top: "65%"
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "45%",
    top: "70%"
  }
]

export const PersonalProject = () => {

  const constrainref = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">

        <SectionHeader
          header="More Projects"
          title="Personal Projects"
          description="Projects built to practice, explore, and improve my web development skills."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* 1st grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-6">

            {/* ----- 1st card----- */}
            <Card className="h-[320px] md:h-[350px] md:col-span-3 animate-fade-up">
              {/* Overlay */}
              <div className="transition-all duration-300 hover:blur-sm">

                <CardHeader title="Mohito" description="Mohito is a an interactive website built with React and GSAP to showcase smooth animations and modern UI." />
                {/* image */}
                <div className="w-60 md:w-72 lg:w-96 mx-auto mt-2 md:mt-0">
                  <Image src={mohitoWebsite} alt="Marlo cover" />
                </div>

              </div>

              {/* overlay hover */}
              <OverlayHover href="https://example.com" />

            </Card>

            {/* ----- 2nd card ----- */}
            <Card className="h-[320px] md:h-[350px] md:col-span-3 animate-fade-up">
              {/* title */}
              <div className="transition-all duration-300 hover:blur-sm">
                <CardHeader title="Ecommerce" description="An e-commerce website built with React & backend integration. Deployed on AWS (free tier)." />
                {/* image */}
                <div className="w-60 md:w-72 lg:w-96 mx-auto mt-2 md:mt-0">
                  <Image src={ecommerceWebsite} alt="Ecommerce cover" />
                </div>
              </div>

              {/* overlay hover */}
              <OverlayHover href="http://ecommerce-project-react-env.eba-hwmb8hwn.ap-southeast-5.elasticbeanstalk.com/" />
            </Card>

          </div>

          {/* 2nd grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* ----- 3rd card [Hobbies] ----- */}
            <Card className="h-[320px] md:h-[350px] md:col-span-3 animate-fade-up">
              {/* title */}
              <div className="transition-all duration-300 hover:blur-sm">
                <CardHeader title="ChatBot" description="A simple chatbot built with React and an external library, implemented entirely on the frontend." />
                {/* image */}
                <div className="w-60 md:w-72 lg:w-96 mx-auto mt-2 md:mt-0">
                  <Image src={chatbotWebsite} alt="Chatbot cover" />
                </div>
              </div>

              {/* overlay hover */}
              <OverlayHover href="https://farahinani.github.io/chatbot-project/" />
            </Card>

            {/* ----- 4th card [map image]----- */}
            <Card className="h-[320px] md:h-[350px] md:col-span-3 animate-fade-up">
              {/* title */}
              <div className="transition-all duration-300 hover:blur-sm">
                <CardHeader title="Youtube" description="A responsive YouTube UI mockup built using pure HTML and CSS, focusing on layout structure" />
                {/* image */}
                <div className="w-60 md:w-72 lg:w-96 mx-auto mt-2 md:mt-0">
                  <Image src={youtubeWebsite} alt="Mohito cover" />
                </div>
              </div>

              {/* overlay hover */}
              <OverlayHover href="https://youtube.com" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
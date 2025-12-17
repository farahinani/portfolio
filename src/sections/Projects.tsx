/* eslint-disable react/jsx-key */
// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import marloWebsite from "@/assets/images/marlo-website-portfolio.png";
import ZespriLandingPage from "@/assets/images/zespri-landing-page.png";
import tetrapakLandingPage from "@/assets/images/tetrapak-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Small Industrie Studio PTE LTD",
    year: "2023",
    title: "Marlo Bespoke",
    results: [
      { title: "WordPress site featuring GSAP animations." },
      { title: "Designed with a fully responsive layout." },
      { title: "Implementation based on provided design" },
      { title: "Delivered as part of SmallIndustrie Studio."}
    ],
    link: "https://www.marlobespoke.com/",
    image: marloWebsite,
  },
  {
    company: "Small Industrie Studio PTE LTD",
    year: "2021",
    title: "Zespri Landing Blog",
    results: [
      { title: "Updated Zespri website content using Adobe Experience Manager (AEM)" },
      { title: "Implemented page update & changes based on client requirements" },
      { title: "Ensured accuracy, responsiveness, & brand consistency across pages" },
      { title: "Work completed as part of a team at SmallIndustrie Studio."}
    ],
    link: "https://www.zespri.com/en-SG/blogdetail/organic-kiwifruit",
    image: ZespriLandingPage,
  },
  {
    company: "Small Industrie Studio PTE LTD",
    year: "2020",
    title: "Tetra Pak Campaign",
    results: [
      { title: "Develop Tetra Pak campaign website using AEM" },
      { title: "Implemented frontend updates and content changes" },
      { title: "Maintained responsive and brand-consistent UI" },
      { title: "Delivered as part of SmallIndustrie Studio."}
    ],
    link: "https://www.tetrapak.com/en-sg/campaigns/food-solutions/prepared-food-processing",
    // https://www.tetrapak.com/en-sg/campaigns/services-apac
    image: tetrapakLandingPage,
  },
  
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          header="Real-World Results"
          title="Featured Projects"
          // description="See how i transformed concepts into engaging digital experiences"
          description="Discover the transformation of ideas into polished digital experiences."
        />

        {/* card wrapper */}
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}>

              {/* bg grain image */}
              {/* <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
              }}></div> */}

              {/* make column for large screen */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* --[lg] 1st column */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-fuchsia-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                {/* --[lg] 2nd column */}
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};

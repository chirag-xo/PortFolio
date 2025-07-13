import congen from '@/assets/images/congen.png'
import stayfinder from "@/assets/images/stayfinder.png";
import imagify from "@/assets/images/imagify.png";
import agent from "@/assets/images/agent.png";
import ticktrack from "@/assets/images/ticktrack.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Tech",
    year: "Next.js, TypeScript, Tailwind CSS, Clerk, Razorpay API, PostgreSQL,Framer Motion, Google Gemini API, ShadCN UI",
    title: "CON-GEN-AI",
    results: [
      { title: "Built a full-stack SaaS for AI-powered content creation using Google Gemini API." },
      { title: "Integrated Clerk for secure auth and sessions." },
      { title: "Simulated Razorpay payments with 100+ successful tests." },
      { title: "Developed scalable backend with Drizzle ORM and PostgreSQL." },
    ],
    link: "https://congen-ai.vercel.app/",
    image: congen,
  },
  {
    company: "Tech",
    year: "React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, REST APIs, AI APIs",
    title: "Imagify",
    results: [
      { title: "AI-powered Text-to-Image SaaS with high-quality generation." },
      { title: "Crafted responsive, animated UI with React.js, Tailwind CSS, Framer Motion, boosting engagement by 40%." },
      { title: "Built scalable backend using Node.js, Express.js, MongoDB handling 500+ requests." },
      { title: "Integrated Replicate / Stability AI APIs for image generation from text." },
    ],
    link: "https://imagify-neon.vercel.app/",
    image: imagify,
  },
  {
    company: "Tech",
    year: "reactjs, tailwindcss, framer motion, vite, shadcn ui , axios , nodejs, expressjs, mongodb",
    title: "Stay-Finder",
    results: [
      { title: "Developed a responsive, user-friendly web platform to search, list, and book short-term property stays." },
      { title: "Built a RESTful API using Express and MongoDB, enabling CRUD operations for hosts and secure booking functionality for users." },
      { title: "Applied modular, maintainable, and testable code practices using Postman for API testing and validation." },
    ],
    link: "https://stay-finder-one.vercel.app/",
    image: stayfinder,
  },
  {
    company: "Tech",
    year: "Next.js, React, Tailwind CSS, TypeScript, Javascript , HTML , CSS , vercel",
    title: "AI Booking Agent",
    results: [
      { title: "Built a conversational AI interface that allows users to book appointments via natural language through a chat-based UI." },
      { title: "Designed a stateful, multi-step conversation flow with custom agentService to extract user intent, handle time/date logic, and simulate availability checks." },
      { title: "Architected with modular, component-based structure and service layers for clear separation of concerns and easy backend integration." },
      { title: "Delivered a rich user experience with dynamic message rendering, quick replies, typing indicators, and interactive time selectors." },
    ],
    link: "https://coversational-ai-agent.vercel.app/",
    image: agent,
  },
  {
    company: "Tech",
    year: "React, TypeScript, TailwindCSS , React Hooks, Context API , LocalStorage ",
    title: "Tick Track",
    results: [
      { title: "Built a dynamic task interface supporting adding, completing, and deleting tasks, with intuitive visual cues and smooth state transitions." },
      { title: "Component-driven structure promotes scalability and maintainability, using reusable input & list modules with contextual logic." },
      { title: "Implemented real-time feedback on actions like completion toggles and task filtering, delivering a polished product feel." },
    ],
    link: "https://task-manager-kappa-lovat.vercel.app/",
    image: ticktrack,
  },
];

export const Projects = () => {
  return (
    <>
      <section className="pb-16 lg:py-24">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r bg-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Real-World Results
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            Featured Projects
          </h2>
          <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
            See how I transformed concepts to engaging digital experiences.
          </p>
          <div className="flex flex-col gap-20 md:mt-20 mt-10">
            {portfolioProjects.map((project, index) => (
              <div
                key={`${project.title}-${project.year}`}
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
                className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none after:outline-white/20 md:pt-12 md:px-10 px-8 pt-8 lg:pt-16 lg:px-20 sticky"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${GrainImage.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest gap-2 text-[12px] text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>—</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl inline-flex items-center justify-center gap-2 md:w-auto px-6 font-semibold mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className=" size-5 ml-2" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 rounded-3xl border-2 border-white/50 top-3 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:absolute"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

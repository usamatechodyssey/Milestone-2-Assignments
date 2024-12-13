import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration.",
    image: "/pro1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "/",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "/pro2.jpg",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com",
    demo: "/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard with location-based forecasts and interactive maps.",
    image: "/pro3.jpg",
    technologies: ["React", "OpenWeather API", "Mapbox", "ChartJS"],
    github: "https://github.com",
    demo: "/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-7">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="md:text-4xl text-5xl font-extrabold text-purple-500 mb-8">
            Featured Projects
          </h1>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground"
                      >
                        <FaGithub className="h-5 w-5 mr-2" />
                        Code
                      </Link>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground"
                      >
                        <FaExternalLinkAlt className="h-5 w-5 mr-2" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

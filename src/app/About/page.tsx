// Example code for About Page (about.tsx)
import Link from "next/link";
import Image from "next/image";
import Skills from "../component/skill";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-4">
      <main className="flex flex-col items-center px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-12">
          {/* Left Side Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <Image
              src="/phir.webp"
              alt="About Me Hero"
              width={800}
              height={600}
              priority
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side Text */}
          <div className="text-lg lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold text-purple-500">
              About Me
            </h1>
            <p className="leading-relaxed text-gray-300">
              Hello! I am Usama, a passionate web developer specializing in
              creating modern and functional web solutions. With expertise in
              Next.js, Tailwind CSS, and TypeScript, I build responsive and
              user-friendly interfaces.
            </p>
            <section>
              <h2 className="text-3xl font-semibold text-white">My Journey</h2>
              <p className="leading-relaxed text-gray-400">
                My journey began with a curiosity for how websites are built.
                Over the years, I have developed a deep love for coding,
                learning new technologies, and solving real-world problems
                through web development.
              </p>
              <p className="leading-relaxed text-gray-400">
                When I am not coding, you can find me exploring new tech trends,
                engaging with the developer community, or sharing my knowledge
                with others.
              </p>
            </section>
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 bg-purple-700 rounded-full text-lg font-medium text-white hover:bg-purple-600 transition-shadow hover:shadow-xl shadow-lg"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Skills />
    </div>
  );
};

export default About;

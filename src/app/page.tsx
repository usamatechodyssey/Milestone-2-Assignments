import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="bg-gray-900 text-white font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-12">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-4 animate-pulse">
              Welcome to Innovation
            </h1>
            <p className="text-base sm:text-xl md:text-3xl mb-6 max-w-4xl mx-auto leading-relaxed">
              Empowering creativity and technology to build exceptional digital
              experiences.
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-4">
              <Link href="/About" legacyBehavior>
                <button className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                  Explore About Me
                </button>
              </Link>
              <Link href="/projects" legacyBehavior>
                <button className="bg-transparent border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                  View My Work
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Link
              href="#next-section"
              className="animate-bounce text-white text-base sm:text-xl"
            >
              Scroll Down
            </Link>
          </div>
        </header>

        {/* Featured Section */}
        <section id="next-section" className="bg-gray-800 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
              What Makes Me Stand Out?
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-pink-400">
                  Innovative Design
                </h3>
                <p>
                  Crafting visually stunning and user-centric designs that
                  captivate and inspire audiences.
                </p>
              </div>
              <div className="bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-400">
                  Cutting-Edge Technology
                </h3>
                <p>
                  Leveraging modern tools and frameworks to deliver scalable and
                  high-performance solutions.
                </p>
              </div>
              <div className="bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-400">
                  Collaborative Spirit
                </h3>
                <p>
                  Thriving in team environments to transform ideas into reality
                  through synergy and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

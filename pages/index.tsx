import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import { Experience } from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[#242B2E] text-white h-screen snap snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Dinesh Katariya's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experiance" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects // Testimonials */}

      {/* Contact Me */}

      <Footer />
    </div>
  );
};

export default Home;

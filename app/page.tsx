import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Trust from "@/components/sections/Trust";
import ServiceArea from "@/components/sections/ServiceArea";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Trust />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyJoin from "@/components/WhyJoin";
import Apply from "@/components/Apply";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyJoin />
        <Apply />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductCategories />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

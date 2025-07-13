
import Hero from '../components/Hero';
import About from '../components/About';
import Languages from '../components/Languages';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Languages />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import ContactSection from "../components/ContactSection";
import NutritionSection from "../components/NutritionSection";
import MaternitySection from "../components/MaternitySection";
import useScrollFade from "../hooks/useScrollFade";
import PregnancyTimeline from "../components/PregnancyTimeline";
import Testimonial from "../components/Testimonial";
import FAQSection from "../components/FAQSection";


const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      
      <NutritionSection />
      <MaternitySection />
      <PregnancyTimeline />
      <ContactSection />
      <FAQSection />
      <Testimonial />
      

    </>
  );
};

export default Home;
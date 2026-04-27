import Hero from '../components/sections/Hero';
import AboutOverview from '../components/sections/AboutOverview';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioOverview from '../components/sections/PortfolioOverview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessOverview from '../components/sections/ProcessOverview';
import BlogHighlights from '../components/sections/BlogHighlights';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutOverview />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioOverview />
      <TestimonialsSection />
      <ProcessOverview />
      <BlogHighlights />
      <FinalCTA />
    </div>
  );
}

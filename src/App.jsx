import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import SectionTwo from "./SectionTwo";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <SectionTwo />
      <SectionTwo dir="flex-row-reverse" />
      <SectionTwo />
      <PortfolioSection />
    </div>
  )
}
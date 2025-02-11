import HeroSection from "./HeroSection";
import SectionTwo from "./SectionTwo";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <SectionTwo />
      <SectionTwo dir="flex-row-reverse" />
      <SectionTwo />
    </div>
  )
}
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import HeroSection from "@/components/HeroSection";
import Instructrs from "@/components/Instructrs";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCoursesSection />
      <WhyChooseUs />
      <Testimonials />
      <Webinars />
      <Instructrs />
    </main>
  );
}

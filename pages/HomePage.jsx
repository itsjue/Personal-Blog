import { NavBar } from "@/components/Nav-Hero-FooterSection";
import { HeroSection } from "@/components/Nav-Hero-FooterSection";
import { ArticleSection } from "@/components/ArticleSection";
import { Footer } from "@/components/Nav-Hero-FooterSection";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
};

export default HomePage;
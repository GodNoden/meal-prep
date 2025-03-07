// app/page.js
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Footer from "./components/Footer";
import ProfileButton from "./components/ProfileButton";
import SearchBar from "./components/SearchBar";
import RecipeCarousel from "./components/RecipeCarousel";
import FunctionButtons from "./components/FunctionButtons";

export default function Home() {
  return (
    // <main>
    //   <Hero />
    //   <Features />
    //   <DashboardPreview />
    //   <Footer />
    // </main>
    <main>
      <div className="main-content">
        <ProfileButton />
        <SearchBar />
        <RecipeCarousel />
        <FunctionButtons />
      </div>
    </main>
  );
}
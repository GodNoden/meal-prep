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
    <main data-theme="cupcake">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to NutriTrack</h1>
            <p className="py-6">Track your meals, get AI recommendations, and stay healthy with real-time alerts.</p>
            <ProfileButton />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <RecipeCarousel />
        <FunctionButtons />
        <Features />
        <DashboardPreview />
      </div>
      <Footer />
    </main>
  );
}
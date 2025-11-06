import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProgramsPage } from "./components/ProgramsPage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "programs" && <ProgramsPage />}
      {currentPage === "contact" && <ContactPage />}
      
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}

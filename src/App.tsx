import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import WomenPage from "./components/WomenPage";
import { translations } from "./translations";

export type Language = "en" | "he";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"main" | "women">("main");
  const [language, setLanguage] = useState<Language>("he");

  const t = translations[language];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle RTL/LTR
  useEffect(() => {
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const handleNavigate = (page: "main" | "women") => {
    setCurrentPage(page);
  };

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${currentPage === 'women' ? 'bg-blush/10' : 'bg-white'} ${language === 'he' ? 'font-sans' : 'font-sans'}`}>
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        language={language} 
        onLanguageChange={toggleLanguage}
        t={t.nav}
      />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === "main" ? (
            <motion.div
              key="main"
              initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'he' ? -20 : 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <MainPage 
                onNavigate={() => handleNavigate("women")} 
                t={t.main}
                language={language}
              />
            </motion.div>
          ) : (
            <motion.div
              key="women"
              initial={{ opacity: 0, x: language === 'he' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <WomenPage t={t.women} language={language} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer 
        isWomenPage={currentPage === "women"} 
        t={currentPage === "women" ? translations.en.footer : t.footer} 
        language={currentPage === "women" ? "en" : language} 
      />
    </div>
  );
}



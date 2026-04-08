import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Language } from "../App";

interface NavbarProps {
  onNavigate: (page: "main" | "women") => void;
  currentPage: "main" | "women";
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export default function Navbar({ onNavigate, currentPage, language, onLanguageChange, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t.services, href: "#services" },
    { name: t.process, href: "#process" },
    { name: t.about, href: "#about" },
  ];

  const isWomenPage = currentPage === "women";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isWomenPage ? 'bg-blush/80' : 'bg-white/80'} backdrop-blur-md border-b border-navy/5`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("main")}
        >
          <span className={`text-2xl font-bold tracking-tighter ${isWomenPage ? 'font-serif text-navy' : 'font-sans text-navy'}`}>
            ESKIT
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-accent transition-colors ${isWomenPage ? 'font-serif' : 'font-sans'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-navy/10 mx-2" />

          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onLanguageChange("en")}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${language === 'en' ? 'bg-navy/5 ring-1 ring-navy/10' : 'opacity-50 hover:opacity-100'}`}
              title="English"
            >
              <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-5 h-auto rounded-sm shadow-sm" />
              <span className="text-[10px] font-bold">EN</span>
            </button>
            <button 
              onClick={() => onLanguageChange("he")}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${language === 'he' ? 'bg-navy/5 ring-1 ring-navy/10' : 'opacity-50 hover:opacity-100'}`}
              title="עברית"
            >
              <img src="https://flagcdn.com/w40/il.png" alt="Israel" className="w-5 h-auto rounded-sm shadow-sm" />
              <span className="text-[10px] font-bold">HE</span>
            </button>
          </div>

          <button
            onClick={() => onNavigate(isWomenPage ? "main" : "women")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              isWomenPage 
                ? 'bg-navy text-white hover:bg-navy/90' 
                : 'bg-blush text-navy border border-navy/10 hover:bg-blush/80'
            }`}
          >
            {isWomenPage ? t.toMain : t.toWomen}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           {/* Mobile Language Switcher */}
           <div className="flex items-center gap-2">
            <button onClick={() => onLanguageChange("en")} className={`p-1 rounded ${language === 'en' ? 'bg-navy/10' : 'opacity-40'}`}>
              <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-6 h-auto rounded-sm" />
            </button>
            <button onClick={() => onLanguageChange("he")} className={`p-1 rounded ${language === 'he' ? 'bg-navy/10' : 'opacity-40'}`}>
              <img src="https://flagcdn.com/w40/il.png" alt="Israel" className="w-6 h-auto rounded-sm" />
            </button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-navy/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onNavigate(isWomenPage ? "main" : "women");
              setIsOpen(false);
            }}
            className="w-full py-3 bg-navy text-white rounded-xl font-semibold"
          >
            {isWomenPage ? t.toMain : t.toWomen}
          </button>
        </motion.div>
      )}
    </nav>
  );
}


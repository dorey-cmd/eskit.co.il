import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Language } from "../App";

export default function Footer({ isWomenPage, t, language }: { isWomenPage?: boolean, t: any, language: Language }) {
  return (
    <footer className={`py-20 border-t border-navy/5 ${isWomenPage ? 'bg-blush/20' : 'bg-navy text-white'}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-2xl font-bold mb-6 tracking-tighter ${isWomenPage ? 'font-serif text-navy' : 'font-sans text-white'}`}>
              ESKIT
            </h3>
            <p className={`max-w-xs text-sm leading-relaxed opacity-70 ${isWomenPage ? 'text-navy' : 'text-white'}`}>
              {t.desc}
            </p>
          </div>
          
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${isWomenPage ? 'text-navy' : 'text-white'}`}>
              {t.contact}
            </h4>
            <ul className={`space-y-4 text-sm opacity-70 ${isWomenPage ? 'text-navy' : 'text-white'}`}>
              <li className="flex items-center gap-3">
                <Mail size={16} /> hello@eskit.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} /> 051-544-1800
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${isWomenPage ? 'text-navy' : 'text-white'}`}>
              {t.social}
            </h4>
            <div className="flex gap-4">
              <a href="#" className={`p-2 rounded-full border transition-colors ${isWomenPage ? 'border-navy/20 text-navy hover:bg-navy/5' : 'border-white/20 text-white hover:bg-white/5'}`}>
                <Instagram size={18} />
              </a>
              <a href="#" className={`p-2 rounded-full border transition-colors ${isWomenPage ? 'border-navy/20 text-navy hover:bg-navy/5' : 'border-white/20 text-white hover:bg-white/5'}`}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={`pt-8 border-t text-[10px] uppercase tracking-widest opacity-40 flex flex-col md:flex-row justify-between gap-4 ${isWomenPage ? 'border-navy/10 text-navy' : 'border-white/10 text-white'}`}>
          <p>© 2026 ESKIT. {language === 'he' ? 'כל הזכויות שמורות.' : 'All rights reserved.'}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">{t.privacy}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

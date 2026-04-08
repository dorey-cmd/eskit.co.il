import { motion } from "motion/react";
import { ArrowRight, Heart, MessageCircle, Moon, Sparkles, Sun, Wind } from "lucide-react";
import { Language } from "../App";

export default function WomenPage({ t, language }: { t: any, language: Language }) {
  const services = [
    {
      title: t.services.items[0].title,
      desc: t.services.items[0].desc,
      icon: <Wind className="text-navy/60" size={24} />,
    },
    {
      title: t.services.items[1].title,
      desc: t.services.items[1].desc,
      icon: <Sparkles className="text-navy/60" size={24} />,
    },
    {
      title: t.services.items[2].title,
      desc: t.services.items[2].desc,
      icon: <Heart className="text-navy/60" size={24} />,
    },
  ];

  // The user requested the bottom part to be "only in English"
  // We'll use the English translations for these sections regardless of current language
  // However, to keep it "mirror", we'll use t.benefits if we want to respect the language.
  // Given the specific request "only in English", I will use the English values for benefits and finalCta.
  
  const englishBenefits = [
    { title: "More Quiet", desc: "Mental quietness to focus on growth." },
    { title: "More Time", desc: "Time for self-care and family." },
    { title: "Less Load", desc: "No more juggling a million tasks." },
    { title: "Business for You", desc: "A business that supports your life." },
  ];

  return (
    <div className="pt-20 bg-blush/10">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-40 ${language === 'he' ? '-left-40' : '-right-40'} w-[600px] h-[600px] bg-blush/30 rounded-full blur-[100px]`} 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-40 ${language === 'he' ? '-right-40' : '-left-40'} w-[600px] h-[600px] bg-beige/40 rounded-full blur-[100px]`} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-serif italic text-navy/40 mb-6 block text-lg">
              {t.hero.tag}
            </span>
            <h1 className="text-5xl lg:text-8xl font-serif text-navy tracking-tight mb-8 leading-[1.1]">
              {t.hero.title} <br />
              <span className="italic">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-navy/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition-all shadow-xl shadow-navy/10">
                {t.hero.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              {t.emotional.points.map((point: string, i: number) => (
                <p key={i} className="text-2xl lg:text-3xl font-serif text-navy/80 italic">
                  {point}
                </p>
              ))}
            </div>
            
            <div className="pt-12 border-t border-navy/5">
              <h2 className="text-4xl lg:text-6xl font-serif text-navy mb-8">
                {t.emotional.title}
              </h2>
              <p className="text-navy/60 text-lg font-light max-w-xl mx-auto">
                {t.emotional.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-blush/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-6">
              {t.services.title} <br /> <span className="italic">{t.services.subtitle}</span>
            </h2>
            <p className="text-navy/60 font-light">
              {t.services.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-12 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-8 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-navy">{service.title}</h3>
                <p className="text-navy/60 leading-relaxed font-light">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-beige rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Woman Entrepreneur" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -bottom-10 ${language === 'he' ? '-left-10' : '-right-10'} p-8 bg-white rounded-[32px] shadow-2xl border border-navy/5 max-w-xs`}
              >
                <p className="text-navy font-serif italic text-lg leading-relaxed">
                  "{t.value.quote}"
                </p>
              </motion.div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-12">
                {t.value.title} <br /> <span className="italic text-navy/40">{t.value.subtitle}</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <Sun className="text-navy/40" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-navy mb-2">{t.value.items[0].title}</h4>
                    <p className="text-navy/60 font-light">{t.value.items[0].desc}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-beige flex items-center justify-center">
                    <Moon className="text-navy/40" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-navy mb-2">{t.value.items[1].title}</h4>
                    <p className="text-navy/60 font-light">{t.value.items[1].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Benefits Section - Kept in English as requested */}
      <section className="py-32 bg-navy text-white" dir="ltr">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {englishBenefits.map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-10 bg-white/5 rounded-[40px] border border-white/10 text-center"
              >
                <h3 className="text-3xl font-serif mb-4">{benefit.title}</h3>
                <p className="text-white/40 text-sm font-light uppercase tracking-widest">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Kept in English as requested */}
      <section id="about" className="py-32 bg-white" dir="ltr">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-serif italic text-navy/40 mb-6 block text-lg">About Eskit</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-10">
            A more personal tone.
          </h2>
          <p className="text-xl text-navy/60 font-light leading-relaxed mb-12">
            Eskit was born from the understanding that business owners—especially women—often carry an invisible load. We combine high-level administrative expertise with the latest AI tools to create a support system that feels human, intuitive, and deeply effective.
          </p>
          <div className="w-24 h-px bg-navy/10 mx-auto" />
        </div>
      </section>

      {/* Final CTA - Kept in English as requested */}
      <section className="py-32 bg-blush/30" dir="ltr">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-serif text-navy mb-12">
            Ready to stop doing <br /> <span className="italic">everything alone?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-navy text-white rounded-full text-xl font-medium hover:scale-105 transition-transform shadow-2xl shadow-navy/20 flex items-center justify-center gap-3">
              Let's Talk <ArrowRight size={24} className={`${language === 'he' ? 'rotate-180' : ''}`} />
            </button>
            <button className="px-12 py-6 bg-[#25D366] text-white rounded-full text-xl font-medium hover:scale-105 transition-transform shadow-2xl shadow-green-500/20 flex items-center justify-center gap-3">
              <MessageCircle size={24} /> WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


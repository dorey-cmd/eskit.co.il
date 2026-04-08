import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Cpu, Layout, Settings, Users, Zap, X } from "lucide-react";
import { Language } from "../App";

export default function MainPage({ onNavigate, t, language }: { onNavigate: () => void, t: any, language: Language }) {
  const services = [
    {
      title: t.services.items[0].title,
      desc: t.services.items[0].desc,
      icon: <Layout className="text-navy" size={24} />,
    },
    {
      title: t.services.items[1].title,
      desc: t.services.items[1].desc,
      icon: <Cpu className="text-navy" size={24} />,
    },
    {
      title: t.services.items[2].title,
      desc: t.services.items[2].desc,
      icon: <Settings className="text-navy" size={24} />,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-6 block">
              {t.hero.tag}
            </span>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-navy">
              {t.hero.title} <br />
              <span className="text-navy/40 italic">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg text-navy/60 max-w-md mb-10 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-navy/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-navy/10">
                {t.hero.cta} <ArrowRight size={18} className={`${language === 'he' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
              </button>
              <button className="px-8 py-4 border border-navy/10 rounded-full font-semibold hover:bg-navy/5 transition-all">
                {t.hero.secondary}
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square bg-beige rounded-[40px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
            </div>
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-6 ${language === 'he' ? '-left-6' : '-right-6'} bg-white p-6 rounded-2xl shadow-xl border border-navy/5`}
            >
              <p className="text-3xl font-bold text-navy tracking-tighter">25+</p>
              <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">{t.hero.stats}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12">
                {t.painPoints.title} <br />
                <span className="text-white/40 italic">{t.painPoints.subtitle}</span>
              </h2>
              <div className="space-y-6">
                {t.painPoints.points.map((point: string, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg text-white/70"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {point}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-12 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm">
                <p className="text-2xl font-light leading-relaxed mb-8 italic">
                  "{t.painPoints.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10" />
                  <div>
                    <p className="font-bold">{t.painPoints.author}</p>
                    <p className="text-xs uppercase tracking-widest opacity-40">{t.painPoints.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-beige/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-4 block">{t.services.tag}</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              {t.services.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[32px] border border-navy/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy">{service.title}</h3>
                <p className="text-navy/60 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-[48px] p-12 lg:p-24 relative overflow-hidden">
            <div className={`absolute top-0 ${language === 'he' ? 'left-0' : 'right-0'} w-1/2 h-full opacity-10 pointer-events-none`}>
              <Zap size={400} className={`text-white absolute -top-20 ${language === 'he' ? '-left-20 -rotate-12' : '-right-20 rotate-12'}`} />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-[10px] font-bold uppercase tracking-widest border border-accent/30">
                  {t.ai.tag}
                </div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-8">
                {t.ai.title}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                {t.ai.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {t.ai.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-white text-navy rounded-full font-semibold hover:bg-white/90 transition-all">
                {t.ai.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-beige/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-4 block">{t.process.tag}</span>
              <h2 className="text-4xl font-bold tracking-tight text-navy mb-8">
                {t.process.title}
              </h2>
              <p className="text-navy/60 leading-relaxed">
                {t.process.desc}
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {t.process.steps.map((step: any, i: number) => (
                <div key={i} className="relative">
                  <span className={`text-6xl font-bold text-navy/5 absolute -top-8 ${language === 'he' ? '-right-4' : '-left-4'}`}>0{i + 1}</span>
                  <h3 className="text-xl font-bold mb-4 text-navy relative z-10">{step.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-beige/30 rounded-[40px] border border-navy/5">
              <h3 className="text-2xl font-bold mb-8 text-navy">{t.who.forTitle}</h3>
              <ul className="space-y-4">
                {t.who.forItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-navy/70">
                    <CheckCircle2 size={18} className="text-navy mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 bg-navy/5 rounded-[40px] border border-navy/5">
              <h3 className="text-2xl font-bold mb-8 text-navy">{t.who.notTitle}</h3>
              <ul className="space-y-4">
                {t.who.notItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-navy/40">
                    <X size={18} className="text-navy/20 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Women CTA Section */}
      <section className="py-20 bg-blush/30 border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">{t.womenCta.title}</h2>
          <p className="text-navy/60 mb-10 max-w-xl mx-auto">
            {t.womenCta.desc}
          </p>
          <button 
            onClick={onNavigate}
            className="px-10 py-5 bg-white border border-navy/10 rounded-full font-bold text-navy hover:bg-blush transition-all flex items-center justify-center gap-3 mx-auto group"
          >
            {t.womenCta.cta} <ArrowRight size={20} className={`${language === 'he' ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'} transition-transform`} />
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-navy mb-12">
            {t.finalCta.title}
          </h2>
          <button className="px-12 py-6 bg-navy text-white rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-navy/20">
            {t.finalCta.cta}
          </button>
        </div>
      </section>
    </div>
  );
}


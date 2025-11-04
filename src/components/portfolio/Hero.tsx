import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              {t('name')}
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              {t('role')}
            </p>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              {t('tagline')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow-md transition-all duration-300 flex items-center space-x-2"
              >
                <span>{t('ui.buttons.contact')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-background border-2 border-primary text-foreground rounded-full font-medium hover:bg-primary/10 transition-all duration-300"
              >
                {t('ui.buttons.projects')}
              </button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="clip-hexagon w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shadow-glow-lg">
                <div className="text-6xl md:text-8xl font-bold text-primary/40">QK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

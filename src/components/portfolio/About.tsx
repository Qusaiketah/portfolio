import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';
import { MapPin, Briefcase, Heart, Download } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const cvFile = language === "sv" ? "/QusaiKetahCV.pdf" : "/EngCv.pdf"

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text={t('ui.sectionBadges.about')} />

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('ui.nav.1')}
        </h2>

        {/* Text OUTSIDE the bubbles stays default (black in light, near-white in dark) */}
        <p className="text-lg text-foreground/80 max-w-4xl mb-12 leading-relaxed">
          {t('bio')}
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Location */}
          <div className="p-6 rounded-2xl bg-gradient-card-1 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1">
            <MapPin className="w-8 h-8 text-primary mb-3" />
            {/* Force white in light mode; revert in dark mode */}
            <h3 className="text-lg font-semibold text-white dark:text-foreground mb-2">
              {t('ui.location')}
            </h3>
            <p className="text-white/90 dark:text-foreground/70">
              {t('ui.locationValue')}
            </p>
          </div>

          {/* Availability */}
          <div className="p-6 rounded-2xl bg-gradient-card-2 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1">
            <Briefcase className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold text-white dark:text-foreground mb-2">
              {t('ui.availability')}
            </h3>
            <p className="text-white/90 dark:text-foreground/70">
              {t('ui.availabilityValue')}
            </p>
          </div>

          {/* Interests */}
          <div className="p-6 rounded-2xl bg-gradient-card-3 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1">
            <Heart className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold text-white dark:text-foreground mb-2">
              {t('ui.interests')}
            </h3>
            <p className="text-white/90 dark:text-foreground/70">
              {t('ui.interestsValue')}
            </p>
          </div>
        </div>

        <a
          href={cvFile}
          download
          className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow-md transition-all duration-300 inline-flex justify-center items-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>{t('ui.buttons.downloadCV')}</span>
        </a>

      </div>
    </section>
  );
};

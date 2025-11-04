import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experiences = t('experience') as Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    bullets: string[];
  }>;

  const borderColors = ['border-l-primary', 'border-l-primary/70', 'border-l-primary/50'];

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text={t('ui.sectionBadges.experience')} />
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          {t('ui.nav.4')}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`p-6 rounded-2xl bg-background border-l-4 ${borderColors[index % borderColors.length]} shadow-glow-sm hover:shadow-glow-md transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                  <div className="flex items-center text-foreground/70">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center text-foreground/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-foreground/80">
                    <span className="mr-2 text-primary">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

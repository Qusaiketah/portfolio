import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const skills = t('skills') as Record<string, string[]>;

  const gradients = [
    'bg-gradient-card-1',
    'bg-gradient-card-2',
    'bg-gradient-card-3',
    'bg-gradient-card-1',
    'bg-gradient-card-2'
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text={t('ui.sectionBadges.skills')} />
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          {t('ui.nav.2')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className={`p-6 rounded-2xl ${gradients[index % gradients.length]} shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
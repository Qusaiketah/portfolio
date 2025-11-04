import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const education = t('education') as {
    degree: string;
    school: string;
    period: string;
    city: string;
    notes: string[];
  };
  const courses = t('courses') as string[];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text={t('ui.sectionBadges.education')} />
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          {t('ui.nav.5')}
        </h2>

        <div className="p-8 rounded-2xl bg-gradient-card-1 shadow-glow-md hover:shadow-glow-lg transition-all duration-300">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 rounded-full bg-primary/20">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
              <p className="text-xl text-primary font-semibold mb-3">{education.school}</p>
              <div className="flex flex-wrap gap-4 text-white/70">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{education.city}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Key Topics:</h4>
            <ul className="space-y-2">
              {education.notes.map((note, index) => (
                <li key={index} className="flex items-start text-white/80">
                  <span className="mr-2 text-primary">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {courses.length > 0 && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">Additional Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-primary/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

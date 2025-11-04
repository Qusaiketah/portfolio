import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-foreground/70 text-sm">
            {t('ui.copyright').replace('{year}', currentYear.toString())}
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <span>{t('ui.backToTop')}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

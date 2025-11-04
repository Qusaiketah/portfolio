import React from 'react';

interface SectionBadgeProps {
  text: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/20 text-primary border border-primary/30 mb-6">
      {text}
    </div>
  );
};

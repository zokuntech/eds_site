import React from 'react';

interface HeroSubtitleProps {
  subtitle: string;
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ subtitle }) => {
  return (
    <p className="mt-8 text-3xl font-medium text-center max-md:max-w-full">
      {subtitle}
    </p>
  );
};

export default HeroSubtitle;
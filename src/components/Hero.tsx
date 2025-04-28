
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="hero-pattern pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0 max-w-2xl relative">
            <div className="absolute -top-10 right-0">
              <LanguageSwitcher />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-lumina-500 to-orange-500 bg-clip-text text-transparent animate-fade-in">
              {t('hero', 'title')}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in">
              {t('hero', 'subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-lumina-500 hover:bg-lumina-600 text-white text-lg px-6 py-6 h-auto neon-glow transition-all duration-300 hover:scale-105">
                {t('hero', 'presaleButton')}
              </Button>
              <Button variant="outline" className="border-lumina-500 text-foreground hover:bg-lumina-100 text-lg px-6 py-6 h-auto glass-effect transition-all duration-300 hover:scale-105">
                {t('hero', 'whitepaperButton')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-foreground/70">{t('hero', 'presaleLive')}</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <div className="font-medium text-foreground/90">100B</div>
                <span className="text-foreground/70 ml-2">{t('hero', 'totalSupply')}</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <div className="font-medium text-foreground/90">24,352</div>
                <span className="text-foreground/70 ml-2">{t('hero', 'holders')}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-lumina-gradient rounded-full blur-3xl opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full shadow-lg flex items-center justify-center glass-effect">
                  <div className="w-40 h-40 md:w-56 md:h-56 bg-lumina-gradient rounded-full flex items-center justify-center neon-glow">
                    <span className="font-bold text-4xl md:text-6xl text-white text-stroke">LMN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-lumina-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta', 'title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t('cta', 'subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-lumina-600 hover:bg-lumina-100 text-lg px-8 py-6 h-auto">
              {t('cta', 'presaleButton')}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              {t('cta', 'whitepaperButton')}
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-bold text-2xl mb-2">40%</h3>
              <p className="text-white/80">{t('tokenomics', 'presale.title')}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-bold text-2xl mb-2">Q2 2025</h3>
              <p className="text-white/80">{t('roadmap', 'phases.phase1.time')}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-bold text-2xl mb-2">Q3 2026</h3>
              <p className="text-white/80">{t('roadmap', 'phases.phase5.time')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

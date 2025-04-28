
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Lock, Rocket, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-lumina-500" />,
    key: 'speed'
  },
  {
    icon: <Lock className="h-8 w-8 text-lumina-500" />,
    key: 'security'
  },
  {
    icon: <Database className="h-8 w-8 text-lumina-500" />,
    key: 'scalability'
  },
  {
    icon: <Rocket className="h-8 w-8 text-lumina-500" />,
    key: 'dex'
  }
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about', 'title')}</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            {t('about', 'subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-lumina-100 hover:border-lumina-300 transition-colors shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="bg-lumina-50 rounded-full p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('about', `features.${feature.key}`)}</h3>
                <p className="text-foreground/70">{t('about', `features.${feature.key}Desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('about', 'vision')}
              </h2>
              <p className="text-foreground/80 mb-4">
                {t('about', 'vision_text.main')}
              </p>
              <p className="text-foreground/80 mb-4">
                {t('about', 'vision_text.secondary')}
              </p>
              <p className="text-foreground/80">
                {t('about', 'vision_text.tertiary')}
              </p>
            </div>
            <div className="rounded-2xl bg-lumina-50 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('about', 'dex.title')}</h3>
                  <p className="text-foreground/70">
                    {t('about', 'dex.description')}
                  </p>
                </div>
                <div className="border-t border-lumina-200 pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('about', 'blockchain.title')}</h3>
                  <p className="text-foreground/70">
                    {t('about', 'blockchain.description')}
                  </p>
                </div>
                <div className="border-t border-lumina-200 pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('about', 'ecosystem.title')}</h3>
                  <p className="text-foreground/70">
                    {t('about', 'ecosystem.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

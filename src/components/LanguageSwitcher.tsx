
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-foreground/70" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
        className="text-foreground/70 hover:text-lumina-500"
      >
        {language === 'en' ? 'ID' : 'EN'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

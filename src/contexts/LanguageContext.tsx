
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

type Translations = {
  [key in Language]: {
    hero: {
      title: string;
      subtitle: string;
      presaleButton: string;
      whitepaperButton: string;
    };
    about: {
      title: string;
      subtitle: string;
      vision: string;
      features: {
        speed: string;
        security: string;
        scalability: string;
        dex: string;
      };
    };
    tokenomics: {
      title: string;
      subtitle: string;
    };
    roadmap: {
      title: string;
      subtitle: string;
    };
    cta: {
      title: string;
      subtitle: string;
    };
  };
};

const translations: Translations = {
  en: {
    hero: {
      title: "The Future of Digital Finance",
      subtitle: "Lumina Token powers the next generation of decentralized exchange and blockchain technology, designed for speed, security, and scalability.",
      presaleButton: "Join Presale",
      whitepaperButton: "Read Whitepaper",
    },
    about: {
      title: "About Lumina",
      subtitle: "Building the next generation of blockchain technology for a decentralized future.",
      vision: "Our Vision for the Future",
      features: {
        speed: "Lightning Fast",
        security: "Secure by Design",
        scalability: "Scalable Architecture",
        dex: "DEX Innovation",
      }
    },
    tokenomics: {
      title: "Tokenomics",
      subtitle: "Lumina Token (LMN) has a total supply of 100 billion tokens, carefully allocated to ensure sustainable growth and development.",
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "Our strategic plan for developing the Lumina ecosystem, including our DEX exchange and native blockchain.",
    },
    cta: {
      title: "Join the Future of Decentralized Finance",
      subtitle: "Be part of the Lumina ecosystem from the very beginning. Participate in our token presale and secure your position in the next generation of blockchain technology.",
    },
  },
  id: {
    hero: {
      title: "Masa Depan Keuangan Digital",
      subtitle: "Token Lumina mendukung generasi berikutnya dari pertukaran terdesentralisasi dan teknologi blockchain, dirancang untuk kecepatan, keamanan, dan skalabilitas.",
      presaleButton: "Gabung Presale",
      whitepaperButton: "Baca Whitepaper",
    },
    about: {
      title: "Tentang Lumina",
      subtitle: "Membangun generasi berikutnya dari teknologi blockchain untuk masa depan terdesentralisasi.",
      vision: "Visi Kami untuk Masa Depan",
      features: {
        speed: "Super Cepat",
        security: "Aman Secara Desain",
        scalability: "Arsitektur Terukur",
        dex: "Inovasi DEX",
      }
    },
    tokenomics: {
      title: "Tokenomics",
      subtitle: "Token Lumina (LMN) memiliki total pasokan 100 miliar token, dialokasikan dengan cermat untuk memastikan pertumbuhan dan pengembangan yang berkelanjutan.",
    },
    roadmap: {
      title: "Peta Jalan",
      subtitle: "Rencana strategis kami untuk mengembangkan ekosistem Lumina, termasuk pertukaran DEX dan teknologi blockchain kami.",
    },
    cta: {
      title: "Bergabunglah dengan Masa Depan Keuangan Terdesentralisasi",
      subtitle: "Jadilah bagian dari ekosistem Lumina sejak awal. Berpartisipasilah dalam presale token kami dan amankan posisi Anda dalam generasi berikutnya teknologi blockchain.",
    },
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof typeof translations['en'], key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (section: keyof typeof translations['en'], key: string) => {
    const keys = key.split('.');
    let value = translations[language][section] as any;
    for (const k of keys) {
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

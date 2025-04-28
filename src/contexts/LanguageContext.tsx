import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

type Translations = {
  [key in Language]: {
    hero: {
      title: string;
      subtitle: string;
      presaleButton: string;
      whitepaperButton: string;
      presaleLive: string;
      totalSupply: string;
      holders: string;
    };
    about: {
      title: string;
      subtitle: string;
      vision: string;
      features: {
        speed: string;
        speedDesc: string;
        security: string;
        securityDesc: string;
        scalability: string;
        scalabilityDesc: string;
        dex: string;
        dexDesc: string;
      };
      vision_text: {
        main: string;
        secondary: string;
        tertiary: string;
      };
      dex: {
        title: string;
        description: string;
      };
      blockchain: {
        title: string;
        description: string;
      };
      ecosystem: {
        title: string;
        description: string;
      };
    };
    tokenomics: {
      title: string;
      subtitle: string;
      token_details: {
        title: string;
        name: string;
        symbol: string;
        supply: string;
        type: string;
        price: string;
      };
      presale: {
        title: string;
        description: string;
        phase1: string;
        phase2: string;
        phase3: string;
        launch: string;
      };
      liquidity: {
        title: string;
        description: string;
        initial: string;
        locked: string;
        release: string;
      };
      team: {
        title: string;
        description: string;
        cliff: string;
        vesting: string;
        monthly: string;
      };
    };
    roadmap: {
      title: string;
      subtitle: string;
      phases: {
        phase1: {
          title: string;
          time: string;
        };
        phase2: {
          title: string;
          time: string;
        };
        phase3: {
          title: string;
          time: string;
        };
        phase4: {
          title: string;
          time: string;
        };
        phase5: {
          title: string;
          time: string;
        };
      };
    };
    cta: {
      title: string;
      subtitle: string;
      presaleButton: string;
      whitepaperButton: string;
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
      presaleLive: "Presale Live",
      totalSupply: "Total Supply",
      holders: "Holders"
    },
    about: {
      title: "About Lumina",
      subtitle: "Building the next generation of blockchain technology for a decentralized future.",
      vision: "Our Vision for the Future",
      features: {
        speed: "Lightning Fast",
        speedDesc: "Lumina's blockchain technology offers unprecedented transaction speeds with minimal fees.",
        security: "Secure by Design",
        securityDesc: "Built from the ground up with security as a priority, protecting your assets and data.",
        scalability: "Scalable Architecture",
        scalabilityDesc: "Designed to handle millions of transactions without compromising on performance.",
        dex: "DEX Innovation",
        dexDesc: "Our decentralized exchange will feature novel liquidity solutions and trading mechanisms."
      },
      vision_text: {
        main: "Lumina aims to create a more inclusive and efficient financial ecosystem where transactions are seamless, affordable, and accessible to everyone.",
        secondary: "By building our own DEX exchange and blockchain technology, we're creating an integrated experience that solves the common pain points in today's decentralized finance landscape.",
        tertiary: "Our mission is to bring the benefits of blockchain technology to the masses through intuitive interfaces and reliable infrastructure."
      },
      dex: {
        title: "Lumina DEX",
        description: "A next-generation decentralized exchange with innovative features like cross-chain swaps, intelligent routing, and low fees."
      },
      blockchain: {
        title: "Lumina Blockchain",
        description: "Our own blockchain solution designed for high throughput, low latency, and enhanced security, supporting smart contracts and DApps."
      },
      ecosystem: {
        title: "Lumina Ecosystem",
        description: "A full suite of tools and services for developers and users to build and engage with decentralized applications."
      }
    },
    tokenomics: {
      title: "Tokenomics",
      subtitle: "Lumina Token (LMN) has a total supply of 100 billion tokens, carefully allocated to ensure sustainable growth and development.",
      token_details: {
        title: "Token Details",
        name: "Token Name",
        symbol: "Token Symbol",
        supply: "Total Supply",
        type: "Token Type",
        price: "Initial Price"
      },
      presale: {
        title: "Presale Information",
        description: "40% of the total supply (40 billion LMN) will be available during presale phases, ensuring wide distribution.",
        phase1: "Phase 1 Price",
        phase2: "Phase 2 Price",
        phase3: "Phase 3 Price",
        launch: "Launch Price"
      },
      liquidity: {
        title: "Liquidity Allocation",
        description: "20% of tokens (20 billion LMN) will be allocated to liquidity pools to ensure trading stability and reduce slippage.",
        initial: "Initial Liquidity",
        locked: "Locked Period",
        release: "Release Schedule"
      },
      team: {
        title: "Team & Development",
        description: "15% of tokens (15 billion LMN) allocated to the team, with a 1-year cliff and 3-year vesting period to ensure long-term commitment.",
        cliff: "Cliff Period",
        vesting: "Vesting Period",
        monthly: "Monthly Release"
      }
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "Our strategic plan for developing the Lumina ecosystem, including our DEX exchange and native blockchain.",
      phases: {
        phase1: {
          title: "Initial Development & Token Launch",
          time: "Q2 2025"
        },
        phase2: {
          title: "DEX Development Begins",
          time: "Q3 2025"
        },
        phase3: {
          title: "DEX Beta & Expansion",
          time: "Q4 2025"
        },
        phase4: {
          title: "DEX Full Launch & Blockchain Development",
          time: "Q1 2026"
        },
        phase5: {
          title: "Blockchain Launch & Ecosystem Growth",
          time: "Q3 2026"
        }
      }
    },
    cta: {
      title: "Join the Future of Decentralized Finance",
      subtitle: "Be part of the Lumina ecosystem from the very beginning. Participate in our token presale and secure your position in the next generation of blockchain technology.",
      presaleButton: "Join Presale",
      whitepaperButton: "Read Whitepaper"
    }
  },
  id: {
    hero: {
      title: "Masa Depan Keuangan Digital",
      subtitle: "Token Lumina mendukung generasi berikutnya dari pertukaran terdesentralisasi dan teknologi blockchain, dirancang untuk kecepatan, keamanan, dan skalabilitas.",
      presaleButton: "Gabung Presale",
      whitepaperButton: "Baca Whitepaper",
      presaleLive: "Presale Aktif",
      totalSupply: "Total Suplai",
      holders: "Pemegang"
    },
    about: {
      title: "Tentang Lumina",
      subtitle: "Membangun generasi berikutnya dari teknologi blockchain untuk masa depan terdesentralisasi.",
      vision: "Visi Kami untuk Masa Depan",
      features: {
        speed: "Super Cepat",
        speedDesc: "Teknologi blockchain Lumina menawarkan kecepatan transaksi yang belum pernah ada sebelumnya dengan biaya minimal.",
        security: "Aman Secara Desain",
        securityDesc: "Dibangun dari awal dengan keamanan sebagai prioritas, melindungi aset dan data Anda.",
        scalability: "Arsitektur Terukur",
        scalabilityDesc: "Dirancang untuk menangani jutaan transaksi tanpa mengorbankan kinerja.",
        dex: "Inovasi DEX",
        dexDesc: "Bursa terdesentralisasi kami akan menampilkan solusi likuiditas dan mekanisme perdagangan yang inovatif."
      },
      vision_text: {
        main: "Lumina bertujuan untuk menciptakan ekosistem keuangan yang lebih inklusif dan efisien di mana transaksi mulus, terjangkau, dan dapat diakses oleh semua orang.",
        secondary: "Dengan membangun pertukaran DEX dan teknologi blockchain kami sendiri, kami menciptakan pengalaman terintegrasi yang menyelesaikan masalah umum dalam lanskap keuangan terdesentralisasi saat ini.",
        tertiary: "Misi kami adalah membawa manfaat teknologi blockchain kepada masyarakat luas melalui antarmuka yang intuitif dan infrastruktur yang andal."
      },
      dex: {
        title: "DEX Lumina",
        description: "Bursa terdesentralisasi generasi berikutnya dengan fitur inovatif seperti pertukaran lintas rantai, perutean cerdas, dan biaya rendah."
      },
      blockchain: {
        title: "Blockchain Lumina",
        description: "Solusi blockchain kami sendiri dirancang untuk throughput tinggi, latensi rendah, dan keamanan yang ditingkatkan, mendukung kontrak pintar dan DApps."
      },
      ecosystem: {
        title: "Ekosistem Lumina",
        description: "Rangkaian lengkap alat dan layanan bagi pengembang dan pengguna untuk membangun dan berinteraksi dengan aplikasi terdesentralisasi."
      }
    },
    tokenomics: {
      title: "Tokenomics",
      subtitle: "Token Lumina (LMN) memiliki total suplai 100 miliar token, dialokasikan dengan cermat untuk memastikan pertumbuhan dan pengembangan yang berkelanjutan.",
      token_details: {
        title: "Detail Token",
        name: "Nama Token",
        symbol: "Simbol Token",
        supply: "Total Suplai",
        type: "Tipe Token",
        price: "Harga Awal"
      },
      presale: {
        title: "Informasi Presale",
        description: "40% dari total suplai (40 miliar LMN) akan tersedia selama tahap presale, memastikan distribusi yang luas.",
        phase1: "Harga Tahap 1",
        phase2: "Harga Tahap 2",
        phase3: "Harga Tahap 3",
        launch: "Harga Peluncuran"
      },
      liquidity: {
        title: "Alokasi Likuiditas",
        description: "20% token (20 miliar LMN) akan dialokasikan ke pool likuiditas untuk memastikan stabilitas perdagangan dan mengurangi slippage.",
        initial: "Likuiditas Awal",
        locked: "Periode Terkunci",
        release: "Jadwal Rilis"
      },
      team: {
        title: "Tim & Pengembangan",
        description: "15% token (15 miliar LMN) dialokasikan untuk tim, dengan cliff 1 tahun dan periode vesting 3 tahun untuk memastikan komitmen jangka panjang.",
        cliff: "Periode Cliff",
        vesting: "Periode Vesting",
        monthly: "Rilis Bulanan"
      }
    },
    roadmap: {
      title: "Peta Jalan",
      subtitle: "Rencana strategis kami untuk mengembangkan ekosistem Lumina, termasuk pertukaran DEX dan blockchain kami.",
      phases: {
        phase1: {
          title: "Pengembangan Awal & Peluncuran Token",
          time: "Q2 2025"
        },
        phase2: {
          title: "Pengembangan DEX Dimulai",
          time: "Q3 2025"
        },
        phase3: {
          title: "Beta DEX & Ekspansi",
          time: "Q4 2025"
        },
        phase4: {
          title: "Peluncuran Penuh DEX & Pengembangan Blockchain",
          time: "Q1 2026"
        },
        phase5: {
          title: "Peluncuran Blockchain & Pertumbuhan Ekosistem",
          time: "Q3 2026"
        }
      }
    },
    cta: {
      title: "Bergabung dengan Masa Depan Keuangan Terdesentralisasi",
      subtitle: "Jadilah bagian dari ekosistem Lumina sejak awal. Berpartisipasilah dalam presale token kami dan amankan posisi Anda dalam generasi berikutnya teknologi blockchain.",
      presaleButton: "Gabung Presale",
      whitepaperButton: "Baca Whitepaper"
    }
  }
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

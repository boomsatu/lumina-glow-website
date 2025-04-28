
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-lumina-500 to-orange-500 bg-clip-text text-transparent">
              The Future of Digital Finance
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Lumina Token powers the next generation of decentralized exchange and blockchain technology, designed for speed, security, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-lumina-500 hover:bg-lumina-600 text-white text-lg px-6 py-6 h-auto">
                Join Presale
              </Button>
              <Button variant="outline" className="border-lumina-500 text-foreground hover:bg-lumina-100 text-lg px-6 py-6 h-auto">
                Read Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-foreground/70">Presale Live</span>
              </div>
              <div className="flex items-center">
                <div className="font-medium text-foreground/90">100B</div>
                <span className="text-foreground/70 ml-2">Total Supply</span>
              </div>
              <div className="flex items-center">
                <div className="font-medium text-foreground/90">24,352</div>
                <span className="text-foreground/70 ml-2">Holders</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-lumina-gradient rounded-full blur-3xl opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-40 h-40 md:w-56 md:h-56 bg-lumina-gradient rounded-full flex items-center justify-center">
                    <span className="font-bold text-4xl md:text-6xl text-white">LMN</span>
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

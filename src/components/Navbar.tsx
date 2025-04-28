import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-lumina-gradient flex items-center justify-center">
                <span className="font-bold text-white">L</span>
              </div>
              <span className="font-bold text-xl text-foreground">Lumina</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#tokenomics" className="text-foreground/80 hover:text-foreground transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-foreground/80 hover:text-foreground transition-colors">Roadmap</a>
            <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">Community</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Join Presale
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#about" className="block py-2 text-foreground/80 hover:text-foreground">
              About
            </a>
            <a href="#tokenomics" className="block py-2 text-foreground/80 hover:text-foreground">
              Tokenomics
            </a>
            <a href="#roadmap" className="block py-2 text-foreground/80 hover:text-foreground">
              Roadmap
            </a>
            <a href="#community" className="block py-2 text-foreground/80 hover:text-foreground">
              Community
            </a>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white">
              Join Presale
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

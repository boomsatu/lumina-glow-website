
import React from 'react';
import { Github, Twitter, Discord, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="community" className="bg-white pt-16 pb-8 border-t border-lumina-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-lumina-gradient flex items-center justify-center mr-2">
                <span className="font-bold text-white">L</span>
              </div>
              <span className="font-bold text-xl">Lumina</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Building the next generation of blockchain technology for a decentralized future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-lumina-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#tokenomics" className="text-foreground/70 hover:text-lumina-500 transition-colors">Tokenomics</a>
              </li>
              <li>
                <a href="#roadmap" className="text-foreground/70 hover:text-lumina-500 transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Developer Resources</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Community Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Press Kit</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Partnerships</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-lumina-500 transition-colors">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-lumina-100 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lumina Project. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-lumina-500 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

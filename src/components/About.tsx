
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Lock, Rocket, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-lumina-500" />,
    title: "Lightning Fast",
    description: "Lumina's blockchain technology offers unprecedented transaction speeds with minimal fees."
  },
  {
    icon: <Lock className="h-8 w-8 text-lumina-500" />,
    title: "Secure by Design",
    description: "Built from the ground up with security as a priority, protecting your assets and data."
  },
  {
    icon: <Database className="h-8 w-8 text-lumina-500" />,
    title: "Scalable Architecture",
    description: "Designed to handle millions of transactions without compromising on performance."
  },
  {
    icon: <Rocket className="h-8 w-8 text-lumina-500" />,
    title: "DEX Innovation",
    description: "Our decentralized exchange will feature novel liquidity solutions and trading mechanisms."
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Lumina</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Lumina is building a comprehensive ecosystem that will revolutionize how people interact with blockchain technology, starting with our token and expanding to a full-featured DEX and native blockchain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-lumina-100 hover:border-lumina-300 transition-colors shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="bg-lumina-50 rounded-full p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-foreground/80 mb-4">
                Lumina aims to create a more inclusive and efficient financial ecosystem where transactions are seamless, affordable, and accessible to everyone.
              </p>
              <p className="text-foreground/80 mb-4">
                By building our own DEX exchange and blockchain technology, we're creating an integrated experience that solves the common pain points in today's decentralized finance landscape.
              </p>
              <p className="text-foreground/80">
                Our mission is to bring the benefits of blockchain technology to the masses through intuitive interfaces and reliable infrastructure.
              </p>
            </div>
            <div className="rounded-2xl bg-lumina-50 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lumina DEX</h3>
                  <p className="text-foreground/70">
                    A next-generation decentralized exchange with innovative features like cross-chain swaps, intelligent routing, and low fees.
                  </p>
                </div>
                <div className="border-t border-lumina-200 pt-6">
                  <h3 className="text-xl font-semibold mb-2">Lumina Blockchain</h3>
                  <p className="text-foreground/70">
                    Our own blockchain solution designed for high throughput, low latency, and enhanced security, supporting smart contracts and DApps.
                  </p>
                </div>
                <div className="border-t border-lumina-200 pt-6">
                  <h3 className="text-xl font-semibold mb-2">Lumina Ecosystem</h3>
                  <p className="text-foreground/70">
                    A full suite of tools and services for developers and users to build and engage with decentralized applications.
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

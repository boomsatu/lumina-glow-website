
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const roadmapItems = [
  {
    phase: "Q2 2025",
    title: "Initial Development & Token Launch",
    completed: true,
    items: [
      "Token Smart Contract Development",
      "Website Launch",
      "Community Building",
      "Initial Exchange Listings",
      "Token Presale"
    ]
  },
  {
    phase: "Q3 2025",
    title: "DEX Development Begins",
    completed: false,
    items: [
      "DEX Architecture Design",
      "Core Team Expansion",
      "Strategic Partnerships",
      "Technical Whitepaper",
      "Community Governance Setup"
    ]
  },
  {
    phase: "Q4 2025",
    title: "DEX Beta & Expansion",
    completed: false,
    items: [
      "DEX Beta Launch",
      "Liquidity Mining Program",
      "Market Maker Partnerships",
      "Mobile App Development",
      "Enhanced Security Audit"
    ]
  },
  {
    phase: "Q1 2026",
    title: "DEX Full Launch & Blockchain Development",
    completed: false,
    items: [
      "DEX Official Launch",
      "Blockchain Architecture Design",
      "Consensus Mechanism Development",
      "Testnet Deployment",
      "Developer Documentation"
    ]
  },
  {
    phase: "Q3 2026",
    title: "Blockchain Launch & Ecosystem Growth",
    completed: false,
    items: [
      "Mainnet Launch",
      "Cross-Chain Bridge Implementation",
      "DApp Ecosystem Incentives",
      "Enterprise Solutions Development",
      "Global Expansion & Marketing"
    ]
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our strategic plan for developing the Lumina ecosystem, including our DEX exchange and native blockchain.
          </p>
        </div>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:ml-6 md:before:ml-0 before:-translate-x-1/2 before:h-full before:w-1 before:bg-lumina-200 before:rounded-full">
          {roadmapItems.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`absolute top-0 left-6 md:left-1/2 w-5 h-5 rounded-full border-4 -ml-2.5 md:-ml-2.5 -translate-x-1/2 z-10 ${item.completed ? 'bg-lumina-500 border-lumina-200' : 'bg-white border-lumina-300'}`}></div>
              
              <div className="md:w-1/2 md:text-right md:pr-8 pl-16 md:pl-0">
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${item.completed ? 'bg-lumina-100 text-lumina-800' : 'bg-muted text-foreground/70'}`}>
                  {item.phase}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              </div>
              
              <Card className={`w-full md:w-1/2 md:pl-8 border ${item.completed ? 'border-lumina-200 bg-lumina-50/30' : 'border-border'}`}>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${item.completed ? 'bg-lumina-500' : 'bg-foreground/30'}`}></div>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

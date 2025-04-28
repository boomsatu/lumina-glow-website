
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const tokenDistribution = [
  { name: 'Presale', value: 40, color: '#FFB347' },
  { name: 'Liquidity', value: 20, color: '#FFD066' },
  { name: 'Team', value: 15, color: '#FFE099' },
  { name: 'Marketing', value: 10, color: '#FFEFCC' },
  { name: 'Ecosystem', value: 10, color: '#FFC033' },
  { name: 'Reserve', value: 5, color: '#FF9F1C' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded shadow-md border border-lumina-100">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-16 md:py-24 bg-lumina-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Lumina Token (LMN) has a total supply of 100 billion tokens, carefully allocated to ensure sustainable growth and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Card className="mb-8 border-lumina-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Token Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-foreground/70">Token Name:</div>
                    <div className="font-medium">Lumina Token</div>
                    
                    <div className="text-foreground/70">Token Symbol:</div>
                    <div className="font-medium">LMN</div>
                    
                    <div className="text-foreground/70">Total Supply:</div>
                    <div className="font-medium">100,000,000,000 LMN</div>
                    
                    <div className="text-foreground/70">Token Type:</div>
                    <div className="font-medium">Native</div>
                    
                    <div className="text-foreground/70">Initial Price:</div>
                    <div className="font-medium">$0.0025 USD</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              {tokenDistribution.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground/80 font-medium">{item.name}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-2 bg-lumina-100" style={{ 
                    color: item.color 
                  }} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[400px] bg-white rounded-xl shadow-sm p-6 border border-lumina-100">
            <h3 className="text-xl font-semibold mb-4 text-center">Token Distribution</h3>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={tokenDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={130}
                  fill="#FFB347"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {tokenDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-lumina-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Presale Information</h3>
              <p className="text-foreground/70 mb-4">
                40% of the total supply (40 billion LMN) will be available during presale phases, ensuring wide distribution.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/80">Phase 1 Price:</span>
                  <span>$0.0025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Phase 2 Price:</span>
                  <span>$0.0035</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Phase 3 Price:</span>
                  <span>$0.0050</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Launch Price:</span>
                  <span>$0.0065</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-lumina-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Liquidity Allocation</h3>
              <p className="text-foreground/70 mb-4">
                20% of tokens (20 billion LMN) will be allocated to liquidity pools to ensure trading stability and reduce slippage.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/80">Initial Liquidity:</span>
                  <span>10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Locked Period:</span>
                  <span>2 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Release Schedule:</span>
                  <span>Quarterly</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-lumina-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Team & Development</h3>
              <p className="text-foreground/70 mb-4">
                15% of tokens (15 billion LMN) allocated to the team, with a 1-year cliff and 3-year vesting period to ensure long-term commitment.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/80">Cliff Period:</span>
                  <span>12 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Vesting Period:</span>
                  <span>36 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Monthly Release:</span>
                  <span>2.78%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

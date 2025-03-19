// components/dashboard/budget-optimization.tsx - Budget Optimization tab content
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/lib/utils';
import { optimizedBudget, totalMarketingSpend } from '@/lib/data';

export default function BudgetOptimization() {
  const [totalBudget, setTotalBudget] = useState(totalMarketingSpend);
  const [budgetInput, setBudgetInput] = useState(totalMarketingSpend.toString());
  const [adjustedBudget, setAdjustedBudget] = useState(optimizedBudget);
  const [projectedIncrease, setProjectedIncrease] = useState(15.8);

  // Calculate the ratio of increase/decrease from original budget
  useEffect(() => {
    const ratio = totalBudget / totalMarketingSpend;
    
    // Adjust budget recommendations based on new total
    const newAdjustedBudget = optimizedBudget.map(item => ({
      ...item,
      current: Math.round(item.current * ratio),
      recommended: Math.round(item.recommended * ratio)
    }));
    
    setAdjustedBudget(newAdjustedBudget);
    
    // Adjust projected increase based on budget change
    // Simplified model: if budget increases by 10%, revenue projected increase grows by ~5%
    // This is a hypothetical model - in a real scenario, this would be based on actual ROI calculations
    if (ratio !== 1) {
      const budgetChangePercent = ((ratio - 1) * 100);
      const newProjectedIncrease = Math.max(5, 15.8 + (budgetChangePercent * 0.5));
      setProjectedIncrease(parseFloat(newProjectedIncrease.toFixed(1)));
    } else {
      setProjectedIncrease(15.8); // Default value
    }
  }, [totalBudget]);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetInput(e.target.value);
  };

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBudget = parseFloat(budgetInput);
    if (!isNaN(newBudget) && newBudget > 0) {
      setTotalBudget(newBudget);
    } else {
      // Reset to current value if invalid input
      setBudgetInput(totalBudget.toString());
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Marketing Budget Optimization</CardTitle>
          <CardDescription>Set your total marketing budget and see optimized allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBudgetSubmit} className="flex flex-col sm:flex-row gap-4 mb-6 items-end">
            <div className="flex-1">
              <label htmlFor="total-budget" className="block text-sm font-medium text-gray-700 mb-1">
                Total Marketing Budget
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="total-budget"
                  id="total-budget"
                  value={budgetInput}
                  onChange={handleBudgetChange}
                  className="block w-full rounded-md border-gray-300 pl-8 pr-12 border p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="0.00"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">CAD</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Budget
            </button>
          </form>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={adjustedBudget} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value: any) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="current" fill="#8884d8" name="Current Budget" />
              <Bar dataKey="recommended" fill="#82ca9d" name="Recommended Budget" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Budget Reallocation Impact</CardTitle>
            <CardDescription>Projected revenue improvement</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-green-600">+{projectedIncrease}%</p>
              <p className="text-gray-500">Projected Revenue Increase</p>
            </div>
            <Separator className="my-4" />
            <div className="w-full grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">{formatCurrency(totalMarketingSpend)}</p>
                <p className="text-gray-500 text-sm">Original Budget</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{formatCurrency(totalBudget)}</p>
                <p className="text-gray-500 text-sm">New Budget</p>
                <p className="text-xs text-gray-400">
                  ({totalBudget > totalMarketingSpend 
                    ? `+${((totalBudget / totalMarketingSpend - 1) * 100).toFixed(1)}%` 
                    : `${((totalBudget / totalMarketingSpend - 1) * 100).toFixed(1)}%`})
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimization Recommendations</CardTitle>
            <CardDescription>Key strategic suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">1</div>
                <div>
                  <p className="font-medium">Increase Social Media budget by 22%</p>
                  <p className="text-sm text-gray-500">Focus on platforms with highest engagement</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">2</div>
                <div>
                  <p className="font-medium">Boost Email marketing spend by 43%</p>
                  <p className="text-sm text-gray-500">Highest ROI channel needing more investment</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">3</div>
                <div>
                  <p className="font-medium">Reduce TV budget by 25%</p>
                  <p className="text-sm text-gray-500">Lower ROI with high fixed costs</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">4</div>
                <div>
                  <p className="font-medium">Increase Influencer marketing by 33%</p>
                  <p className="text-sm text-gray-500">Growing channel with strong potential for electronics</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Budget Allocation Comparison</CardTitle>
          <CardDescription>Current vs Recommended allocation percentages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current %</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended %</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {adjustedBudget.map((item, index) => {
                  const currentPercent = (item.current / totalBudget * 100).toFixed(1);
                  const recommendedPercent = (item.recommended / totalBudget * 100).toFixed(1);
                  const change = (item.recommended - item.current);
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(item.current)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currentPercent}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(item.recommended)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recommendedPercent}%</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {change > 0 ? '+' : ''}{formatCurrency(change)} ({change > 0 ? '+' : ''}{((change / item.current) * 100).toFixed(1)}%)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
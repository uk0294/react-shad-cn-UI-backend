// components/dashboard/product-analysis.tsx - Product Analysis tab content
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/lib/utils';
import { categoryPerformance } from '@/lib/data';

export default function ProductAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Category Performance</CardTitle>
          <CardDescription>Revenue and growth by product category</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categoryPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip formatter={(value: any, name: any) => {
                if (name === "Growth") return `${value}%`;
                return formatCurrency(value);
              }} />
              <Legend />
              <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
              <Bar yAxisId="right" dataKey="growth" fill="#82ca9d" name="Growth %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Channel Effectiveness by Category</CardTitle>
            <CardDescription>Best marketing channels for each product category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Smartphones", channels: ["Social Media (45%)", "Search (30%)", "Influencer (15%)"] },
                { category: "Laptops", channels: ["Search (40%)", "Display (25%)", "Email (20%)"] },
                { category: "TVs", channels: ["TV Ads (50%)", "Display (20%)", "Search (15%)"] },
                { category: "Gaming", channels: ["Influencer (35%)", "Social Media (30%)", "Search (25%)"] },
                { category: "Audio", channels: ["Social Media (35%)", "Email (30%)", "Display (20%)"] },
              ].map((item, i) => (
                <div key={i} className="border-b pb-2 last:border-b-0">
                  <p className="font-medium">{item.category}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.channels.map((channel, j) => (
                      <span key={j} className="bg-slate-100 px-2 py-1 text-xs rounded-full">{channel}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Focus Categories</CardTitle>
            <CardDescription>Strategic product categories for next year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">1</span>
                </div>
                <div>
                  <p className="font-medium">Gaming</p>
                  <p className="text-sm text-gray-500">20% growth rate with strong margin potential</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-700">2</span>
                </div>
                <div>
                  <p className="font-medium">TVs</p>
                  <p className="text-sm text-gray-500">15% growth with high average order value</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-700">3</span>
                </div>
                <div>
                  <p className="font-medium">Smartphones</p>
                  <p className="text-sm text-gray-500">12% growth with high purchase frequency</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
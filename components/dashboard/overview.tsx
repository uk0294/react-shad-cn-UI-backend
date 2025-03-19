// components/dashboard/overview.tsx - Overview tab content
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { LineChart, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell, ResponsiveContainer } from 'recharts';

import { revenueByMonth, marketingSpendByChannel, npsData, COLORS, totalRevenue, totalMarketingSpend, avgROI } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-gray-500">Jul 2023 - Jun 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Marketing Spend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalMarketingSpend)}</div>
            <p className="text-xs text-gray-500">Total for all channels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgROI}x</div>
            <p className="text-xs text-gray-500">Return on marketing investment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">NPS Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{npsData[npsData.length - 1].score}</div>
            <p className="text-xs text-gray-500">Current month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue vs target</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueByMonth} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: any) => formatCurrency(value)} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
                <Line type="monotone" dataKey="target" stroke="#82ca9d" name="Target" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketing Channel Distribution</CardTitle>
            <CardDescription>Spend allocation by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketingSpendByChannel}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="spend"
                  nameKey="name"
                  label={({name, percent}: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {marketingSpendByChannel.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Key Insights</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-5 mt-2">
            <li>Social Media and Search channels show the highest ROI</li>
            <li>Revenue consistently exceeded targets in Q4 2023</li>
            <li>NPS scores show positive correlation with revenue growth</li>
            <li>Gaming category shows highest growth potential (20%)</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
// components/dashboard/electromart-dashboard.tsx - Main dashboard container
"use client"
// components/dashboard/electromart-dashboard.tsx - Main dashboard container
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Overview from './overview';
import PerformanceDrivers from './performance-drivers';
import MarketingROI from './marketing-roi';
import BudgetOptimization from './budget-optimization';
import ProductAnalysis from './product-analysis';
import ChatBot from './chatbot';

export default function ElectroMartDashboard() {
  const [tabValue, setTabValue] = useState("overview");

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-2xl font-bold text-blue-800">ElectroMart Marketing Analytics</h1>
          <div className="ml-auto flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Data period: July 2023 - June 2024
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <Tabs value={tabValue} onValueChange={setTabValue} className="space-y-6">
          <TabsList className="bg-slate-200">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance-drivers">Performance Drivers</TabsTrigger>
            <TabsTrigger value="marketing-roi">Marketing ROI</TabsTrigger>
            <TabsTrigger value="budget-optimization">Budget Optimization</TabsTrigger>
            <TabsTrigger value="product-analysis">Product Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Overview />
          </TabsContent>

          <TabsContent value="performance-drivers">
            <PerformanceDrivers />
          </TabsContent>

          <TabsContent value="marketing-roi">
            <MarketingROI />
          </TabsContent>

          <TabsContent value="budget-optimization">
            <BudgetOptimization />
          </TabsContent>

          <TabsContent value="product-analysis">
            <ProductAnalysis />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-4 px-6">
        <div className="text-center text-sm text-gray-500">
          ElectroMart Marketing Analytics Dashboard • Data period: July 2023 - June 2024
        </div>
      </footer>

      {/* Add the ChatBot component */}
      <ChatBot />
    </div>
  );
}
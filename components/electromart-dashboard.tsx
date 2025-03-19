// "use client"

// import { useState } from 'react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { BarChart, LineChart, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line, Pie, Cell, ResponsiveContainer } from 'recharts';
// import { Separator } from "@/components/ui/separator";
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { Info, ChevronDown, ChevronUp } from 'lucide-react';

// // Mock data for demonstration - would be replaced by actual data analysis
// const revenueByMonth = [
//   { name: 'Jul 23', revenue: 450000, target: 420000 },
//   { name: 'Aug 23', revenue: 470000, target: 430000 },
//   { name: 'Sep 23', revenue: 520000, target: 450000 },
//   { name: 'Oct 23', revenue: 540000, target: 470000 },
//   { name: 'Nov 23', revenue: 620000, target: 500000 },
//   { name: 'Dec 23', revenue: 750000, target: 600000 },
//   { name: 'Jan 24', revenue: 600000, target: 520000 },
//   { name: 'Feb 24', revenue: 580000, target: 510000 },
//   { name: 'Mar 24', revenue: 630000, target: 540000 },
//   { name: 'Apr 24', revenue: 610000, target: 550000 },
//   { name: 'May 24', revenue: 640000, target: 560000 },
//   { name: 'Jun 24', revenue: 680000, target: 580000 },
// ];

// const marketingSpendByChannel = [
//   { name: 'TV', spend: 120000, roi: 3.2 },
//   { name: 'Social Media', spend: 180000, roi: 4.5 },
//   { name: 'Search', spend: 150000, roi: 5.1 },
//   { name: 'Email', spend: 70000, roi: 6.8 },
//   { name: 'Display', spend: 90000, roi: 2.7 },
//   { name: 'Influencer', spend: 60000, roi: 3.9 },
// ];

// // KPI categories data
// const revenueSalesKPIs = [
//   { name: 'total_gmv', impact: 32 },
//   { name: 'total_units', impact: 28 },
//   { name: 'total_orders', impact: 25 },
//   { name: 'average_order_value', impact: 22 },
//   { name: 'gmv_growth_pct', impact: 20 },
//   { name: 'first_orders', impact: 15 },
//   { name: 'weekend_sales', impact: 12 },
//   { name: 'aov_growth_pct', impact: 10 },
// ].sort((a, b) => b.impact - a.impact);

// const customerEngagementKPIs = [
//   { name: 'total_unique_customers', impact: 30 },
//   { name: 'repeat_customers', impact: 28 },
//   { name: 'repeat_orders', impact: 25 },
//   { name: 'repeat_order_rate', impact: 22 },
//   { name: 'first_order_rate', impact: 18 },
//   { name: 'churn_rate', impact: 15 },
//   { name: 'high_churn_risk', impact: 12 },
//   { name: 'low_nps_risk', impact: 10 },
// ].sort((a, b) => b.impact - a.impact);

// const marketingChannelKPIs = [
//   { name: 'customer_retention_rate', impact: 26 },
//   { name: 'NPS', impact: 22 },
// ].sort((a, b) => b.impact - a.impact);

// const productDiscountKPIs = [
//   { name: 'discount_rate', impact: 24 },
// ].sort((a, b) => b.impact - a.impact);

// const weatherEventKPIs = [
//   { name: 'temperature', impact: 12 },
//   { name: 'precipitation', impact: 8 },
//   { name: 'extreme_weather_days', impact: 6 },
// ].sort((a, b) => b.impact - a.impact);

// const additionalContextKPIs = [
//   { name: 'warehouse_efficiency', impact: 18 },
//   { name: 'delivery_risk', impact: 15 },
//   { name: 'risk_score', impact: 12 },
// ].sort((a, b) => b.impact - a.impact);

// // Overall KPI impact (combined from all categories)
// const overallKPIimpact = [
//   { name: 'Revenue & Sales', impact: 35 },
//   { name: 'Customer & Engagement', impact: 25 },
//   { name: 'Marketing & Channel', impact: 20 },
//   { name: 'Product & Discount', impact: 12 },
//   { name: 'Additional Context', impact: 5 },
//   { name: 'Weather Events', impact: 3 },
// ].sort((a, b) => b.impact - a.impact);

// const kpiDrivers = [
//   { name: 'Marketing Spend', impact: 35 },
//   { name: 'Promotions/Discounts', impact: 25 },
//   { name: 'Seasonal Factors', impact: 15 },
//   { name: 'NPS Score', impact: 12 },
//   { name: 'Weather', impact: 8 },
//   { name: 'Other Factors', impact: 5 },
// ];

// const categoryPerformance = [
//   { name: 'Smartphones', revenue: 250000, growth: 12, adSpend: 80000 },
//   { name: 'Laptops', revenue: 220000, growth: 8, adSpend: 70000 },
//   { name: 'TVs', revenue: 180000, growth: 15, adSpend: 60000 },
//   { name: 'Audio', revenue: 120000, growth: 5, adSpend: 50000 },
//   { name: 'Gaming', revenue: 160000, growth: 20, adSpend: 55000 },
//   { name: 'Accessories', revenue: 90000, growth: 10, adSpend: 30000 },
// ];

// const npsData = [
//   { month: 'Jul 23', score: 78 },
//   { month: 'Aug 23', score: 77 },
//   { month: 'Sep 23', score: 80 },
//   { month: 'Oct 23', score: 79 },
//   { month: 'Nov 23', score: 82 },
//   { month: 'Dec 23', score: 85 },
//   { month: 'Jan 24', score: 83 },
//   { month: 'Feb 24', score: 81 },
//   { month: 'Mar 24', score: 84 },
//   { month: 'Apr 24', score: 86 },
//   { month: 'May 24', score: 85 },
//   { month: 'Jun 24', score: 87 },
// ];

// const optimizedBudget = [
//   { name: 'Social Media', current: 180000, recommended: 220000 },
//   { name: 'Search', current: 150000, recommended: 180000 },
//   { name: 'Email', current: 70000, recommended: 100000 },
//   { name: 'TV', current: 120000, recommended: 90000 },
//   { name: 'Display', current: 90000, recommended: 70000 },
//   { name: 'Influencer', current: 60000, recommended: 80000 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

// const totalRevenue = revenueByMonth.reduce((sum, item) => sum + item.revenue, 0);
// const totalMarketingSpend = marketingSpendByChannel.reduce((sum, item) => sum + item.spend, 0);
// const avgROI = (marketingSpendByChannel.reduce((sum, item) => sum + (item.roi * item.spend), 0) / totalMarketingSpend).toFixed(2);

// const formatCurrency = (value) => {
//   return new Intl.NumberFormat('en-CA', {
//     style: 'currency',
//     currency: 'CAD',
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0
//   }).format(value);
// };

// const KPIBarChart = ({ data, title, description, height = 300 }) => {
//   return (
//     <Card className="mb-6">
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ResponsiveContainer width="100%" height={height}>
//           <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis type="number" />
//             <YAxis dataKey="name" type="category" width={150} />
//             <Tooltip formatter={(value) => `${value}%`} />
//             <Bar dataKey="impact" fill="#0088FE" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default function ElectroMartDashboard() {
//   const [tabValue, setTabValue] = useState("overview");
//   const [expandedSections, setExpandedSections] = useState({
//     revenueSales: true,
//     customerEngagement: true,
//     marketingChannel: true,
//     productDiscount: true,
//     weatherEvent: true,
//     additionalContext: true,
//     overallImpact: true
//   });

//   const toggleSection = (section) => {
//     setExpandedSections({
//       ...expandedSections,
//       [section]: !expandedSections[section]
//     });
//   };

//   return (
//     <div className="flex min-h-screen flex-col bg-slate-50">
//       <header className="sticky top-0 z-10 bg-white border-b">
//         <div className="flex h-16 items-center px-6">
//           <h1 className="text-2xl font-bold text-blue-800">ElectroMart Marketing Analytics</h1>
//           <div className="ml-auto flex items-center space-x-4">
//             <div className="text-sm text-gray-600">
//               Data period: July 2023 - June 2024
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1 p-6">
//         <Tabs value={tabValue} onValueChange={setTabValue} className="space-y-6">
//           <TabsList className="bg-slate-200">
//             <TabsTrigger value="overview">Overview</TabsTrigger>
//             <TabsTrigger value="performance-drivers">Performance Drivers</TabsTrigger>
//             <TabsTrigger value="marketing-roi">Marketing ROI</TabsTrigger>
//             <TabsTrigger value="budget-optimization">Budget Optimization</TabsTrigger>
//             <TabsTrigger value="product-analysis">Product Analysis</TabsTrigger>
//           </TabsList>

//           {/* Overview Tab */}
//           <TabsContent value="overview" className="space-y-6">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               <Card>
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
//                   <p className="text-xs text-gray-500">Jul 2023 - Jun 2024</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-sm font-medium">Marketing Spend</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{formatCurrency(totalMarketingSpend)}</div>
//                   <p className="text-xs text-gray-500">Total for all channels</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{avgROI}x</div>
//                   <p className="text-xs text-gray-500">Return on marketing investment</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-sm font-medium">NPS Score</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{npsData[npsData.length - 1].score}</div>
//                   <p className="text-xs text-gray-500">Current month</p>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Revenue Trend</CardTitle>
//                   <CardDescription>Monthly revenue vs target</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={revenueByMonth} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip formatter={(value) => formatCurrency(value)} />
//                       <Legend />
//                       <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
//                       <Line type="monotone" dataKey="target" stroke="#82ca9d" name="Target" strokeDasharray="5 5" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Marketing Channel Distribution</CardTitle>
//                   <CardDescription>Spend allocation by channel</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <PieChart>
//                       <Pie
//                         data={marketingSpendByChannel}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={100}
//                         fill="#8884d8"
//                         dataKey="spend"
//                         nameKey="name"
//                         label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       >
//                         {marketingSpendByChannel.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip formatter={(value) => formatCurrency(value)} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </div>

//             <Alert>
//               <Info className="h-4 w-4" />
//               <AlertTitle>Key Insights</AlertTitle>
//               <AlertDescription>
//                 <ul className="list-disc pl-5 mt-2">
//                   <li>Social Media and Search channels show the highest ROI</li>
//                   <li>Revenue consistently exceeded targets in Q4 2023</li>
//                   <li>NPS scores show positive correlation with revenue growth</li>
//                   <li>Gaming category shows highest growth potential (20%)</li>
//                 </ul>
//               </AlertDescription>
//             </Alert>
//           </TabsContent>

//           {/* Performance Drivers Tab */}
//           <TabsContent value="performance-drivers" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Overall KPI's Impact</CardTitle>
//                 <CardDescription>Relative influence of KPI categories on revenue</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <BarChart data={overallKPIimpact} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis type="number" />
//                     <YAxis dataKey="name" type="category" width={150} />
//                     <Tooltip formatter={(value) => `${value}%`} />
//                     <Bar dataKey="impact" fill="#8884d8" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]}>
//                       {overallKPIimpact.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Bar>
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             {/* Revenue & Sales KPIs */}
//             <div className="bg-white rounded-lg shadow border">
//               <div 
//                 className="p-4 flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleSection('revenueSales')}
//               >
//                 <h3 className="text-lg font-medium">1. Revenue and Sales KPIs</h3>
//                 {expandedSections.revenueSales ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSections.revenueSales && (
//                 <div className="p-4 pt-0">
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={revenueSalesKPIs} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={150} />
//                       <Tooltip formatter={(value) => `${value}%`} />
//                       <Bar dataKey="impact" fill="#0088FE" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>

//             {/* Customer & Engagement KPIs */}
//             <div className="bg-white rounded-lg shadow border">
//               <div 
//                 className="p-4 flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleSection('customerEngagement')}
//               >
//                 <h3 className="text-lg font-medium">2. Customer & Engagement KPIs</h3>
//                 {expandedSections.customerEngagement ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSections.customerEngagement && (
//                 <div className="p-4 pt-0">
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={customerEngagementKPIs} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={150} />
//                       <Tooltip formatter={(value) => `${value}%`} />
//                       <Bar dataKey="impact" fill="#00C49F" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>

//             {/* Marketing and Channel Performance KPIs */}
//             <div className="bg-white rounded-lg shadow border">
//               <div 
//                 className="p-4 flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleSection('marketingChannel')}
//               >
//                 <h3 className="text-lg font-medium">3. Marketing and Channel Performance KPIs</h3>
//                 {expandedSections.marketingChannel ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSections.marketingChannel && (
//                 <div className="p-4 pt-0">
//                   <ResponsiveContainer width="100%" height={200}>
//                     <BarChart data={marketingChannelKPIs} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={150} />
//                       <Tooltip formatter={(value) => `${value}%`} />
//                       <Bar dataKey="impact" fill="#FFBB28" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>

//             {/* Product & Discount KPIs */}
//             <div className="bg-white rounded-lg shadow border">
//               <div 
//                 className="p-4 flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleSection('productDiscount')}
//               >
//                 <h3 className="text-lg font-medium">4. Product & Discount KPIs</h3>
//                 {expandedSections.productDiscount ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSections.productDiscount && (
//                 <div className="p-4 pt-0">
//                   <ResponsiveContainer width="100%" height={150}>
//                     <BarChart data={productDiscountKPIs} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={150} />
//                       <Tooltip formatter={(value) => `${value}%`} />
//                       <Bar dataKey="impact" fill="#FF8042" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>

//             {/* Weather Events */}
//             <div className="bg-white rounded-lg shadow border">
//               <div 
//                 className="p-4 flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleSection('weatherEvent')}
//               >
//                 <h3 className="text-lg font-medium">5. Weather Events</h3>
//                 {expandedSections.weatherEvent ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSections.weatherEvent && (
//                 <div className="p-4 pt-0">
//                   <ResponsiveContainer width="100%" height={200}>
//                     <BarChart data={weatherEventKPIs} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={150} />
//                       <Tooltip formatter={(value) => `${value}%`} />
//                       <Bar dataKey="impact" fill="#8884d8" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>

//             {/* Additional Contextual KPIs */}
//             <div className="bg-white rounded-lg shadow border">
//               <div 
//                 className="p-4 flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleSection('additionalContext')}
//               >
//                 <h3 className="text-lg font-medium">6. Additional Contextual KPIs</h3>
//                 {expandedSections.additionalContext ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSections.additionalContext && (
//                 <div className="p-4 pt-0">
//                   <ResponsiveContainer width="100%" height={200}>
//                     <BarChart data={additionalContextKPIs} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={150} />
//                       <Tooltip formatter={(value) => `${value}%`} />
//                       <Bar dataKey="impact" fill="#82ca9d" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>

//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>NPS Score Trend</CardTitle>
//                   <CardDescription>Customer satisfaction correlation with revenue</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={npsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="month" />
//                       <YAxis domain={[70, 90]} />
//                       <Tooltip />
//                       <Line type="monotone" dataKey="score" stroke="#82ca9d" name="NPS Score" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Seasonal Performance Analysis</CardTitle>
//                   <CardDescription>Impact of seasons and holidays on revenue</CardDescription>
//                 </CardHeader>
//                 <CardContent className="h-[300px] flex items-center justify-center">
//                   <div className="text-center">
//                     <p className="text-gray-500 mb-4">Analysis would show seasonal patterns based on actual data</p>
//                     <p className="text-sm text-gray-400">Holiday seasons (Nov-Dec) show 32% higher sales</p>
//                     <p className="text-sm text-gray-400">Weather correlation: -0.25 with extreme temperatures</p>
//                     <p className="text-sm text-gray-400">Payday weeks show 18% higher conversion rates</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           {/* Marketing ROI Tab */}
//           <TabsContent value="marketing-roi" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Marketing Channel ROI</CardTitle>
//                 <CardDescription>Return on investment by marketing channel</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <BarChart data={marketingSpendByChannel} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//                     <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//                     <Tooltip formatter={(value, name) => name === "ROI" ? `${value}x` : formatCurrency(value)} />
//                     <Legend />
//                     <Bar yAxisId="left" dataKey="spend" fill="#8884d8" name="Marketing Spend" />
//                     <Bar yAxisId="right" dataKey="roi" fill="#82ca9d" name="ROI" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Spend vs Revenue Correlation</CardTitle>
//                   <CardDescription>Impact of marketing spend on revenue</CardDescription>
//                 </CardHeader>
//                 <CardContent className="h-[300px] flex items-center justify-center">
//                   <div className="text-center">
//                     <p className="text-gray-500 mb-4">Correlation analysis based on actual data</p>
//                     <p className="font-medium">Key findings:</p>
//                     <ul className="mt-2 space-y-1 text-sm text-gray-600 text-left">
//                       <li>• Email marketing shows highest ROI (6.8x)</li>
//                       <li>• Social media spending has strong correlation with revenue (r=0.78)</li>
//                       <li>• Display ads show diminishing returns above $80,000/month</li>
//                       <li>• TV ads impact takes 2-3 weeks to materialize in sales</li>
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Time-Lag Analysis</CardTitle>
//                   <CardDescription>Delayed impact of marketing on revenue</CardDescription>
//                 </CardHeader>
//                 <CardContent className="h-[300px] flex items-center justify-center">
//                   <div className="text-center">
//                     <p className="text-gray-500 mb-4">Time-lag effects vary by channel</p>
//                     <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-left">
//                       <div className="text-sm font-medium">Channel</div>
//                       <div className="text-sm font-medium">Average Impact Delay</div>
//                       <div className="text-sm">Social Media</div>
//                       <div className="text-sm">2-5 days</div>
//                       <div className="text-sm">Search</div>
//                       <div className="text-sm">1-3 days</div>
//                       <div className="text-sm">Email</div>
//                       <div className="text-sm">Same day - 2 days</div>
//                       <div className="text-sm">TV</div>
//                       <div className="text-sm">1-3 weeks</div>
//                       <div className="text-sm">Display</div>
//                       <div className="text-sm">3-7 days</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           {/* Budget Optimization Tab */}
//           <TabsContent value="budget-optimization" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recommended Budget Allocation</CardTitle>
//                 <CardDescription>Optimized marketing spend by channel for next year</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <BarChart data={optimizedBudget} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip formatter={(value) => formatCurrency(value)} />
//                     <Legend />
//                     <Bar dataKey="current" fill="#8884d8" name="Current Budget" />
//                     <Bar dataKey="recommended" fill="#82ca9d" name="Recommended Budget" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Budget Reallocation Impact</CardTitle>
//                   <CardDescription>Projected revenue improvement</CardDescription>
//                 </CardHeader>
//                 <CardContent className="h-[300px] flex flex-col items-center justify-center">
//                   <div className="text-center mb-6">
//                     <p className="text-4xl font-bold text-green-600">+15.8%</p>
//                     <p className="text-gray-500">Projected Revenue Increase</p>
//                   </div>
//                   <Separator className="my-4" />
//                   <div className="w-full grid grid-cols-2 gap-4 text-center">
//                     <div>
//                       <p className="text-2xl font-bold">{formatCurrency(totalMarketingSpend)}</p>
//                       <p className="text-gray-500 text-sm">Current Budget</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold">{formatCurrency(totalMarketingSpend)}</p>
//                       <p className="text-gray-500 text-sm">Recommended Budget</p>
//                       <p className="text-xs text-gray-400">(Same total, reallocated)</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Optimization Recommendations</CardTitle>
//                   <CardDescription>Key strategic suggestions</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     <li className="flex items-start gap-2">
//                       <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">1</div>
//                       <div>
//                         <p className="font-medium">Increase Social Media budget by 22%</p>
//                         <p className="text-sm text-gray-500">Focus on platforms with highest engagement</p>
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">2</div>
//                       <div>
//                         <p className="font-medium">Boost Email marketing spend by 43%</p>
//                         <p className="text-sm text-gray-500">Highest ROI channel needing more investment</p>
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">3</div>
//                       <div>
//                         <p className="font-medium">Reduce TV budget by 25%</p>
//                         <p className="text-sm text-gray-500">Lower ROI with high fixed costs</p>
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <div className="h-6 w-6 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">4</div>
//                       <div>
//                         <p className="font-medium">Increase Influencer marketing by 33%</p>
//                         <p className="text-sm text-gray-500">Growing channel with strong potential for electronics</p>
//                       </div>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           {/* Product Analysis Tab */}
//           <TabsContent value="product-analysis" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Product Category Performance</CardTitle>
//                 <CardDescription>Revenue and growth by product category</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <BarChart data={categoryPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//                     <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//                     <Tooltip formatter={(value, name) => {
//                       if (name === "Growth") return `${value}%`;
//                       return formatCurrency(value);
//                     }} />
//                     <Legend />
//                     <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
//                     <Bar yAxisId="right" dataKey="growth" fill="#82ca9d" name="Growth %" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Channel Effectiveness by Category</CardTitle>
//                   <CardDescription>Best marketing channels for each product category</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {[
//                       { category: "Smartphones", channels: ["Social Media (45%)", "Search (30%)", "Influencer (15%)"] },
//                       { category: "Laptops", channels: ["Search (40%)", "Display (25%)", "Email (20%)"] },
//                       { category: "TVs", channels: ["TV Ads (50%)", "Display (20%)", "Search (15%)"] },
//                       { category: "Gaming", channels: ["Influencer (35%)", "Social Media (30%)", "Search (25%)"] },
//                       { category: "Audio", channels: ["Social Media (35%)", "Email (30%)", "Display (20%)"] },
//                     ].map((item, i) => (
//                       <div key={i} className="border-b pb-2 last:border-b-0">
//                         <p className="font-medium">{item.category}</p>
//                         <div className="flex flex-wrap gap-1 mt-1">
//                           {item.channels.map((channel, j) => (
//                             <span key={j} className="bg-slate-100 px-2 py-1 text-xs rounded-full">{channel}</span>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recommended Focus Categories</CardTitle>
//                   <CardDescription>Strategic product categories for next year</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-4">
//                       <div className="h-16 w-16 rounded-lg bg-green-100 flex items-center justify-center">
//                         <span className="text-2xl font-bold text-green-700">1</span>
//                       </div>
//                       <div>
//                         <p className="font-medium">Gaming</p>
//                         <p className="text-sm text-gray-500">20% growth rate with strong margin potential</p>
//                       </div>
//                     </div>
//                     <Separator />
//                     <div className="flex items-center gap-4">
//                       <div className="h-16 w-16 rounded-lg bg-blue-100 flex items-center justify-center">
//                         <span className="text-2xl font-bold text-blue-700">2</span>
//                       </div>
//                       <div>
//                         <p className="font-medium">TVs</p>
//                         <p className="text-sm text-gray-500">15% growth with high average order value</p>
//                       </div>
//                     </div>
//                     <Separator />
//                     <div className="flex items-center gap-4">
//                       <div className="h-16 w-16 rounded-lg bg-purple-100 flex items-center justify-center">
//                         <span className="text-2xl font-bold text-purple-700">3</span>
//                       </div>
//                       <div>
//                         <p className="font-medium">Smartphones</p>
//                         <p className="text-sm text-gray-500">12% growth with high purchase frequency</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </main>

//       <footer className="border-t py-4 px-6">
//         <div className="text-center text-sm text-gray-500">
//           ElectroMart Marketing Analytics Dashboard • Data period: July 2023 - June 2024
//         </div>
//       </footer>
//     </div>
//   );
// }
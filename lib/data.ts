// lib/data.ts - Contains all mock data for the dashboard

// Monthly revenue data
export const revenueByMonth = [
    { name: 'Jul 23', revenue: 450000, target: 420000 },
    { name: 'Aug 23', revenue: 470000, target: 430000 },
    { name: 'Sep 23', revenue: 520000, target: 450000 },
    { name: 'Oct 23', revenue: 540000, target: 470000 },
    { name: 'Nov 23', revenue: 620000, target: 500000 },
    { name: 'Dec 23', revenue: 750000, target: 600000 },
    { name: 'Jan 24', revenue: 600000, target: 520000 },
    { name: 'Feb 24', revenue: 580000, target: 510000 },
    { name: 'Mar 24', revenue: 630000, target: 540000 },
    { name: 'Apr 24', revenue: 610000, target: 550000 },
    { name: 'May 24', revenue: 640000, target: 560000 },
    { name: 'Jun 24', revenue: 680000, target: 580000 },
  ];
  
  // Marketing channel data
  export const marketingSpendByChannel = [
    { name: 'TV', spend: 120000, roi: 3.2 },
    { name: 'Social Media', spend: 180000, roi: 4.5 },
    { name: 'Search', spend: 150000, roi: 5.1 },
    { name: 'Email', spend: 70000, roi: 6.8 },
    { name: 'Display', spend: 90000, roi: 2.7 },
    { name: 'Influencer', spend: 60000, roi: 3.9 },
  ];
  
  // KPI categories data
  export const revenueSalesKPIs = [
    { name: 'total_gmv', impact: 32 },
    { name: 'total_units', impact: 28 },
    { name: 'total_orders', impact: 25 },
    { name: 'average_order_value', impact: 22 },
    { name: 'gmv_growth_pct', impact: 20 },
    { name: 'first_orders', impact: 15 },
    { name: 'weekend_sales', impact: 12 },
    { name: 'aov_growth_pct', impact: 10 },
  ].sort((a, b) => b.impact - a.impact);
  
  export const customerEngagementKPIs = [
    { name: 'total_unique_customers', impact: 30 },
    { name: 'repeat_customers', impact: 28 },
    { name: 'repeat_orders', impact: 25 },
    { name: 'repeat_order_rate', impact: 22 },
    { name: 'first_order_rate', impact: 18 },
    { name: 'churn_rate', impact: 15 },
    { name: 'high_churn_risk', impact: 12 },
    { name: 'low_nps_risk', impact: 10 },
  ].sort((a, b) => b.impact - a.impact);
  
  export const marketingChannelKPIs = [
    { name: 'customer_retention_rate', impact: 26 },
    { name: 'NPS', impact: 22 },
  ].sort((a, b) => b.impact - a.impact);
  
  export const productDiscountKPIs = [
    { name: 'discount_rate', impact: 24 },
  ].sort((a, b) => b.impact - a.impact);
  
  export const weatherEventKPIs = [
    { name: 'temperature', impact: 12 },
    { name: 'precipitation', impact: 8 },
    { name: 'extreme_weather_days', impact: 6 },
  ].sort((a, b) => b.impact - a.impact);
  
  export const additionalContextKPIs = [
    { name: 'warehouse_efficiency', impact: 18 },
    { name: 'delivery_risk', impact: 15 },
    { name: 'risk_score', impact: 12 },
  ].sort((a, b) => b.impact - a.impact);
  
  // Overall KPI impact (combined from all categories)
  export const overallKPIimpact = [
    { name: 'Revenue & Sales', impact: 35 },
    { name: 'Customer & Engagement', impact: 25 },
    { name: 'Marketing & Channel', impact: 20 },
    { name: 'Product & Discount', impact: 12 },
    { name: 'Additional Context', impact: 5 },
    { name: 'Weather Events', impact: 3 },
  ].sort((a, b) => b.impact - a.impact);
  
  export const kpiDrivers = [
    { name: 'Marketing Spend', impact: 35 },
    { name: 'Promotions/Discounts', impact: 25 },
    { name: 'Seasonal Factors', impact: 15 },
    { name: 'NPS Score', impact: 12 },
    { name: 'Weather', impact: 8 },
    { name: 'Other Factors', impact: 5 },
  ];
  
  export const categoryPerformance = [
    { name: 'Smartphones', revenue: 250000, growth: 12, adSpend: 80000 },
    { name: 'Laptops', revenue: 220000, growth: 8, adSpend: 70000 },
    { name: 'TVs', revenue: 180000, growth: 15, adSpend: 60000 },
    { name: 'Audio', revenue: 120000, growth: 5, adSpend: 50000 },
    { name: 'Gaming', revenue: 160000, growth: 20, adSpend: 55000 },
    { name: 'Accessories', revenue: 90000, growth: 10, adSpend: 30000 },
  ];
  
  export const npsData = [
    { month: 'Jul 23', score: 78 },
    { month: 'Aug 23', score: 77 },
    { month: 'Sep 23', score: 80 },
    { month: 'Oct 23', score: 79 },
    { month: 'Nov 23', score: 82 },
    { month: 'Dec 23', score: 85 },
    { month: 'Jan 24', score: 83 },
    { month: 'Feb 24', score: 81 },
    { month: 'Mar 24', score: 84 },
    { month: 'Apr 24', score: 86 },
    { month: 'May 24', score: 85 },
    { month: 'Jun 24', score: 87 },
  ];
  
  export const optimizedBudget = [
    { name: 'Social Media', current: 180000, recommended: 220000 },
    { name: 'Search', current: 150000, recommended: 180000 },
    { name: 'Email', current: 70000, recommended: 100000 },
    { name: 'TV', current: 120000, recommended: 90000 },
    { name: 'Display', current: 90000, recommended: 70000 },
    { name: 'Influencer', current: 60000, recommended: 80000 },
  ];
  
  export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  // Calculate derived data
  export const totalRevenue = revenueByMonth.reduce((sum, item) => sum + item.revenue, 0);
  export const totalMarketingSpend = marketingSpendByChannel.reduce((sum, item) => sum + item.spend, 0);
  export const avgROI = (marketingSpendByChannel.reduce((sum, item) => sum + (item.roi * item.spend), 0) / totalMarketingSpend).toFixed(2);
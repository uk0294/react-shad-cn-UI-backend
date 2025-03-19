// components/dashboard/kpi-category.tsx - Reusable KPI category component
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';

interface KPICategoryProps {
  title: string;
  data: { name: string; impact: number }[];
  color: string;
  initiallyExpanded?: boolean;
}

export default function KPICategory({ 
  title, 
  data, 
  color, 
  initiallyExpanded = true 
}: KPICategoryProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  return (
    <div className="bg-white rounded-lg shadow border">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer" 
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expanded && (
        <div className="p-4 pt-0">
          <ResponsiveContainer width="100%" height={data.length * 40 + 50} minHeight={150}>
            <BarChart 
              data={data} 
              layout="vertical" 
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar 
                dataKey="impact" 
                fill={color} 
                name="Impact on Revenue (%)" 
                radius={[0, 4, 4, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import StatsCard from './StatsCard';

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: { title: 'Total Users', value: '1,234', lastUpdated: '2 min ago' },
    revenue: { title: 'Revenue', value: '₹45,678', lastUpdated: '5 min ago' },
    conversion: { title: 'Conversion Rate', value: '12.5%', lastUpdated: '10 min ago' }
  });

  const handleUpdate = (statKey) => {
    console.log('Updating:', statKey);
    
    const getNewValue = (key) => {
      switch (key) {
        case 'users':
          return `${Math.floor(1000 + Math.random() * 9000).toLocaleString()}`;
        case 'revenue':
          return `₹${Math.floor(10000 + Math.random() * 90000).toLocaleString()}`;
        case 'conversion':
          return `${(5 + Math.random() * 15).toFixed(1)}%`;
        default:
          return 'Updated';
      }
    };

    setStats(prevStats => ({
      ...prevStats,
      [statKey]: {
        ...prevStats[statKey],
        value: getNewValue(statKey),
        lastUpdated: 'Just now'
      }
    }));
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <p className="text-muted">Click "Simulate Update" - check console for re-render logs</p>
      
      <div className="row">
        <StatsCard 
          title={stats.users.title}
          value={stats.users.value}
          lastUpdated={stats.users.lastUpdated}
          onUpdate={() => handleUpdate('users')}
        />
        <StatsCard 
          title={stats.revenue.title}
          value={stats.revenue.value}
          lastUpdated={stats.revenue.lastUpdated}
          onUpdate={() => handleUpdate('revenue')}
        />
        <StatsCard 
          title={stats.conversion.title}
          value={stats.conversion.value}
          lastUpdated={stats.conversion.lastUpdated}
          onUpdate={() => handleUpdate('conversion')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
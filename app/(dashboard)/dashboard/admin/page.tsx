'use client';
import { useState, useEffect } from 'react';
import {
  Users,
  BookOpen,
  Book,
  BarChart3,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { MetricCard } from '@/components/dashboard/admin-dashboard/card/MetricCard';
import { ChartCard } from '@/components/dashboard/admin-dashboard/card/ChartCard';
import { DataTable } from '@/components/dashboard/admin-dashboard/card/DataTable';
import { mockUserGrowth, mockLessonEngagement } from '@/data/mock/charts';
import { mockUsers } from '@/data/mock/users';
import { mockLessons } from '@/data/mock/lessons';
import { mockVocabulary } from '@/data/mock/vocabulary';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleStatClick = (section: string) => {
    console.log(`Navigating to ${section} details...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          loading={loading}
          onClick={() => handleStatClick('users')}
        />
        <MetricCard
          title="Active Lessons"
          value="45"
          icon={BookOpen}
          trend={{ value: 8, isPositive: true }}
          loading={loading}
          onClick={() => handleStatClick('lessons')}
        />
        <MetricCard
          title="Vocabulary Items"
          value="2,567"
          icon={Book}
          trend={{ value: 5, isPositive: true }}
          loading={loading}
          onClick={() => handleStatClick('vocabulary')}
        />
        <MetricCard
          title="Daily Active Users"
          value="892"
          icon={Activity}
          trend={{ value: 3, isPositive: false }}
          loading={loading}
          onClick={() => handleStatClick('activity')}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="User Growth"
          icon={TrendingUp}
          data={mockUserGrowth}
          loading={loading}
        />
        <ChartCard
          title="Lesson Engagement (%)"
          icon={BarChart3}
          data={mockLessonEngagement}
          loading={loading}
        />
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Recent Users
          </h2>
          <DataTable
            columns={[
              { key: 'username', label: 'Username' },
              { key: 'email', label: 'Email' },
              {
                key: 'registrationDate',
                label: 'Registration Date',
                render: (value) =>
                  new Date(value as string).toLocaleDateString(),
              },
              {
                key: 'lastLogin',
                label: 'Last Login',
                render: (value) =>
                  new Date(value as string).toLocaleDateString(),
              },
            ]}
            data={mockUsers}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Recent Lessons
          </h2>
          <DataTable
            columns={[
              { key: 'title', label: 'Title' },
              { key: 'category', label: 'Category' },
              { key: 'students', label: 'Enrolled Students' },
              {
                key: 'lastUpdated',
                label: 'Creation Date',
                render: (value) =>
                  new Date(value as string).toLocaleDateString(),
              },
            ]}
            data={mockLessons}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Recent Vocabulary
          </h2>
          <DataTable
            columns={[
              { key: 'word', label: 'Word/Phrase' },
              { key: 'definition', label: 'Definition' },
              { key: 'usageCount', label: 'Usage Count' },
              { key: 'category', label: 'Category' },
            ]}
            data={mockVocabulary}
          />
        </div>
      </div>
    </div>
  );
}

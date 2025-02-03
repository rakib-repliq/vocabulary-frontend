'use client';

import { BookOpen } from 'lucide-react';
import { DataTable } from '@/components/dashboard/admin-dashboard/card/DataTable';
import { PageHeader } from '@/components/dashboard/admin-dashboard/layout/PageHeader';
import { mockLessons } from '@/data/mock/lessons';

export default function LessonsPage() {
  const handleAddLesson = () => {
    console.log('Add lesson clicked');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Lesson Management"
        icon={BookOpen}
        buttonLabel="Create New Lesson"
        onButtonClick={handleAddLesson}
      />

      <div className="space-y-4">
        <DataTable
          columns={[
            { key: 'title', label: 'Title' },
            { key: 'category', label: 'Category' },
            { key: 'instructor', label: 'Instructor' },
            { key: 'status', label: 'Status' },
            { key: 'students', label: 'Students' },
            {
              key: 'lastUpdated',
              label: 'Last Updated',
              render: (value) => new Date(value as string).toLocaleDateString(),
            },
          ]}
          data={mockLessons}
        />
      </div>
    </div>
  );
}

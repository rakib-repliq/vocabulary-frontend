'use client';

import { Book } from 'lucide-react';
import { DataTable } from '@/components/dashboard/admin-dashboard/card/DataTable';
import { PageHeader } from '@/components/dashboard/admin-dashboard/layout/PageHeader';
import { mockVocabulary } from '@/data/mock/vocabulary';

export default function VocabularyPage() {
  const handleAddWord = () => {
    console.log('Add word clicked');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Vocabulary Management"
        icon={Book}
        buttonLabel="Add New Word"
        onButtonClick={handleAddWord}
      />

      <div className="space-y-4">
        <DataTable
          columns={[
            { key: 'word', label: 'Word' },
            { key: 'definition', label: 'Definition' },
            { key: 'category', label: 'Category' },
            { key: 'difficulty', label: 'Difficulty' },
            { key: 'usageCount', label: 'Usage Count' },
            {
              key: 'lastUsed',
              label: 'Last Used',
              render: (value) => new Date(value as string).toLocaleDateString(),
            },
          ]}
          data={mockVocabulary}
        />
      </div>
    </div>
  );
}

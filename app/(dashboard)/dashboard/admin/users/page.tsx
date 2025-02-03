'use client';

import { Users } from 'lucide-react';
import { DataTable } from '@/components/dashboard/admin-dashboard/card';
import { PageHeader } from '@/components/dashboard/admin-dashboard/layout';
import { mockUsers } from '@/data';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="User Management" icon={Users} />

      <div className="space-y-4">
        <DataTable
          columns={[
            { key: 'username', label: 'Username' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role' },
            { key: 'status', label: 'Status' },
            {
              key: 'registrationDate',
              label: 'Join Date',
              render: (value) => new Date(value as string).toLocaleDateString(),
            },
          ]}
          data={mockUsers}
          itemsPerPage={14}
        />
      </div>
    </div>
  );
}

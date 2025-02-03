'use client';

import { Users } from 'lucide-react';
import { DataTable } from '@/components/dashboard/admin-dashboard/card/DataTable';
import { PageHeader } from '@/components/dashboard/admin-dashboard/layout/PageHeader';
import { mockUsers } from '@/data/mock/users';

export default function UsersPage() {
  const handleAddUser = () => {
    console.log('Add user clicked');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="User Management"
        icon={Users}
        buttonLabel="Add New User"
        onButtonClick={handleAddUser}
      />

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

import { Folder } from 'lucide-react';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

export default function DashboardPage() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Folder />
        </EmptyMedia>
        <EmptyTitle>Dashboard</EmptyTitle>
        <EmptyDescription>This is your dashboard.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

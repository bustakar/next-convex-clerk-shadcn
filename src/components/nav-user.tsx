'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { ChevronsUpDown } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';

import { Skeleton } from './ui/skeleton';

const AppUserButton = ({
  isLoaded,
  name,
  email,
  imageUrl,
}: {
  isLoaded: boolean;
  name: string | null;
  email: string | null;
  imageUrl: string | null;
}) => {
  if (!isLoaded) {
    return (
      <>
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </>
    );
  }

  const userInitials = name
    ?.split(' ')
    .map((name: string) => name[0])
    .join('');
  return (
    <div className="relative inline-block">
      <UserButton
        appearance={{
          elements: {
            rootBox:
              'absolute inset-0 w-full h-full cursor-pointer z-10 opacity-0',
          },
        }}
      />
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={imageUrl ?? ''} alt={name ?? 'User Avatar'} />
          <AvatarFallback className="rounded-lg">{userInitials}</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">{name}</span>
          <span className="truncate text-xs">{email}</span>
        </div>
        <ChevronsUpDown className="ml-auto size-4" />
      </div>
    </div>
  );
};

export function NavUser() {
  const { user, isLoaded } = useUser();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <AppUserButton
          isLoaded={isLoaded}
          name={user?.fullName ?? null}
          email={user?.primaryEmailAddress?.emailAddress ?? null}
          imageUrl={user?.imageUrl ?? null}
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

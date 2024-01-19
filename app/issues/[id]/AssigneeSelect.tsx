'use client';

import { Skeleton } from '@/app/components';
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from 'next-auth';

const AssigneeSelect = () => {
  const { data: users, error, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3
    })

  if(isLoading) return <Skeleton />

    if(error) return null;
  

  return (
    <Select.Root>
      {/* <Select.Trigger placeholder='Assign...' /> */}
        <Select.Trigger />
          <Select.Content>
            <Select.Group>
                <Select.Label>Assignee</Select.Label>
                {users?.map(user => (
                <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)
                )}
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
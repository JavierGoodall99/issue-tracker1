'use client';

import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneeSelect = () => {
  return (
    <Select.Root>
      {/* <Select.Trigger placeholder='Assign...' /> */}
        <Select.Trigger />
          <Select.Content>
            <Select.Group>
                <Select.Label>Assignee</Select.Label>
                <Select.Item value="1">Javier Goodall</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
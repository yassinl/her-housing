<script>
    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Button>Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
  <Dropdown>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
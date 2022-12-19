import { Button, Stack } from '@chakra-ui/react';

const Filter = () => {
  const filter = 'all';

  return (
    <Stack spacing={2} direction="row" mt="8">
      <Button disabled={filter === 'all'}>All</Button>
      <Button disabled={filter === 'uncompleted'}>Not completed</Button>
      <Button disabled={filter === 'completed'}>Completed</Button>
    </Stack>
  );
};

export { Filter };

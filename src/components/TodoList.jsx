import { Checkbox, HStack, Stack, Text } from '@chakra-ui/react';

const Todo = ({ id, title, completed }) => {
  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} />
      <Text>{title}</Text>
    </HStack>
  );
};

const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn JS', completed: true },
    { id: 2, title: 'Learn React', completed: false },
  ];

  return (
    <Stack minH="300px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export { TodoList };

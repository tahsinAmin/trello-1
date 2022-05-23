import Card from "../Card/Card";
import InputContainer from "../Input/InputContainer";
import Title from "../Title/Title";
import { Box, Button, Collapse, Flex, Stack } from "@chakra-ui/react"

export default function List({ list }) {
  return (
    <Stack spacing={5} className='bg-gray-200 w-64 border-1 p-1 pl-0 shadow-lg rounded-sm'>
      <Title title={list.title} />
      {list.cards.map(card => <Card key={card.id} card={card} />)}
      <InputContainer listId={list.id} type={"Card"} />
    </Stack>
  );
}

import Card from "../Card/Card";
import InputContainer from "../Input/InputContainer";
import Title from "../Title/Title";
import { Box, Button, Collapse, Flex, HStack, Spacer, Stack } from "@chakra-ui/react"
import { Droppable } from "react-beautiful-dnd";
import { FiMoreHorizontal } from "react-icons/fi";
import storeApi from "../../utils/storeApi";
import { useContext } from "react";


export default function List({ list }) {
  const { deleteListById } = useContext(storeApi)
  return (
    <Stack spacing={5} className='bg-[#ebecf0] w-64 border-1 p-1 pl-0 shadow-lg rounded-sm'>
      <Flex align={'center'}>
        <Title title={list.title} listId={list.id} />
        <Spacer />
        <FiMoreHorizontal onClick={() => deleteListById(list.id)} />
      </Flex>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}
            mt={4}
          >
            {list.cards.map((card, index) => <Card key={card.id} card={card} index={index} />)}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <InputContainer listId={list.id} type={"Card"} />
    </Stack>
  );
}

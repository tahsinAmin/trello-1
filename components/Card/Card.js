import { Box } from '@chakra-ui/react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Card({ card, index }) {
   return (
      <Draggable draggableId={card.id} index={index}>
         {(provided) => (
            <Box
               ref={provided.innerRef}
               {...provided.dragHandleProps}
               {...provided.draggableProps}
            >
               <Box className='bg-white p-1 m-1 shadow-sm rounded-sm'>{card.title}</Box>
            </Box>
         )}
      </Draggable>
   )
}

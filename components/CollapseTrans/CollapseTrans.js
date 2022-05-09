import React from 'react'
import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"
import Lorem from '../Lorem/Lorem'


export default function CollapseTrans() {
   const { isOpen, onToggle } = useDisclosure()
   return (
      <div>
         <Button onClick={onToggle}>Click Me</Button>
         <Collapse in={isOpen} animateOpacity>
            <Box
               p='40px'
               color='black'
               mt='4'
               bg='teal.500'
               rounded='md'
               shadow='md'
            >
               <Lorem count={40} onToggle={onToggle} />
            </Box>
         </Collapse>

      </div>
   )
}

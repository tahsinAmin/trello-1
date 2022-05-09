import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import InputCard from './InputCard'

export default function InputContainer() {
   const { isOpen, onToggle } = useDisclosure()
   const [open, setOpen] = useState(false)

   return (
      <div className='mt-2'>
         <Collapse in={isOpen} animateOpacity>
            <InputCard onToggle={onToggle} />
         </Collapse>
         <div className='p-1 pl-0 pb-0 m-1 mt-0 hover:bg-gray-300 transition duration-200 cursor-pointer'>
            {!isOpen && <p onClick={() => {
               onToggle()
            }}
               className='text-gray-500'> Add a Card... </p>
            }
         </div>
      </div>
   )
}

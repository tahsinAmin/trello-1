import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"
import InputCard from './InputCard'

export default function InputContainer({ listId, type }) {
   const { isOpen, onClose, onOpen } = useDisclosure()

   return (
      <div className='w-64 '>
         <Collapse in={isOpen} animateOpacity>
            <InputCard listId={listId} onClose={onClose} type={type} />
         </Collapse>
         {/* Power Move 1 */}
         <div className={`${!isOpen ? 'p-1' : ''} m-1 mt-0 bg-[#ebecf0] hover:bg-gray-300 transition duration-200 cursor-pointer`}>
            {!isOpen && <p onClick={onOpen}
               className='text-gray-500'>  {`+ Add ${type === 'Card' ? "a Card" : 'another List'}`}</p>
            }
         </div>
      </div>
   )
}

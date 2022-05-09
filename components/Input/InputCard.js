import React from 'react'
import { MdClear } from "react-icons/md";
export default function InputCard({ onToggle }) {
   return (
      <div className='m-1'>
         <div>
            <textarea
               onBlur={() => onToggle()}
               row="2" className='w-full resize-none' placeholder='Enter a title of this card' />
         </div>
         <div className='confirm m-1 mt-0 flex justify-start items-center space-x-4'>
            <button type="button" onClick={onToggle} class="btnConfirm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Card</button>
            <MdClear onClick={onToggle} />
         </div>
      </div>
   )
   // https://youtu.be/QBKyDX7P7Tk?t=1956 33:11
   // https://chakra-ui.com/docs/components/other/transitions#collapse-props
}
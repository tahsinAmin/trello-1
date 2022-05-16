import React, { useState, useContext } from 'react';
import { MdClear } from "react-icons/md";
import storeApi from '../../utils/storeApi';
export default function InputCard({ listId, onClose }) {
   const { addMoreCard } = useContext(storeApi)
   const [cardTitle, setCardTitle] = useState("");

   const handleBtnConfirm = () => {
      console.log("Called");
      addMoreCard(cardTitle, listId)
      setCardTitle("")
      onClose()
   }
   return (
      <div className='m-1'>
         <div>
            <textarea
               autoFocus
               className='w-full resize-none'
               onBlur={() => onClose()}
               onChange={(e) => setCardTitle(e.target.value)}
               row="2"
               value={cardTitle}
               placeholder='Enter a title of this card'
            />
         </div>
         <div className='confirm m-1 mt-0 flex justify-start items-center space-x-4'>
            <button
               onClick={handleBtnConfirm}
               type="button" className="btnConfirm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Add Card
            </button>
            <MdClear onClick={onClose} />
         </div>
      </div>
   )
}
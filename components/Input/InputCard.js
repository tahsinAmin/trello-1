import React, { useState, useContext } from 'react';
import { MdClear } from "react-icons/md";
import storeApi from '../../utils/storeApi';

export default function InputCard({ listId, onClose, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi)
  const [title, setTitle] = useState("");

  const handleBtnConfirm = () => {
    if (type == 'Card') {
      addMoreCard(title, listId)
    } else {
      addMoreList(title)
    }
    setTitle("")
    onClose()
  }


  return (
    <>
      <div>
        <textarea
          autoFocus
          className='w-full resize-none p-1'
          onChange={(e) => setTitle(e.target.value)}
          row="2"
          value={title}
          placeholder={type === 'Card' ? 'Enter a title of this card' : "Enter list title..."}
        />
      </div>
      <div className='confirm m-1 mt-0 flex justify-start items-center space-x-4'>
        <button
          onClick={handleBtnConfirm}
          type="submit" className="btnConfirm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add {type}
        </button>
        <MdClear onClick={onClose} />
      </div>
    </>
  )
}
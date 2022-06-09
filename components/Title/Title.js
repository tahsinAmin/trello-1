import React, { useContext, useState } from "react";

import storeApi from "../../utils/storeApi";

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi)
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  }
  const handleOnBlur = () => {
    updateListTitle(newTitle, listId)
    setOpen(false)
  }

  return (
    <div>
      {open ? (
        <input
          onChange={handleOnChange}
          autoFocus
          type='text'
          className='bg-gray-300 w-full border-none font-semibold text-xl'
          value={newTitle}
          onBlur={handleOnBlur}

        />
      ) : (
        <div className="flex justify-between p-1 items-center">
          <p onClick={() => setOpen(true)} className='flex-1 font-semibold text-xl'>{newTitle}</p>

        </div>
      )}
    </div>
  );
}

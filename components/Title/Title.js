// import {
//   Box,
//   Editable,
//   EditableInput,
//   EditableTextarea,
//   EditablePreview,
//   ChakraProvider,
// } from "@chakra-ui/react";
// import { useState } from "react";

// export default function Title() {
//   const [open, setOpen] = useState(false);
//   return (
//     <ChakraProvider>
//       <Editable defaultValue='Take some chakra'>
//         <EditablePreview />
//         <EditableInput />
//       </Editable>
//     </ChakraProvider>
//   );
// }

import React, { useState } from "react";

import { FiMoreHorizontal } from "react-icons/fi";
export default function Title() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <input
          type='text'
          className='bg-gray-300 w-full border-none'
          value='Todo'
          onBlur={() => setOpen(!open)}
          autofocus
        />
      ) : (
        <div className="flex justify-between p-1">
          <p onClick={() => setOpen(!open)} className='flex-1'>Todo</p>
          <FiMoreHorizontal />
        </div>
      )}
    </div>
  );
}

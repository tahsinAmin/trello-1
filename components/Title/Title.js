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
export default function Title({ title }) {
  const [open, setOpen] = useState(false);
  const [sText, setSText] = useState(title);

  return (
    <div>
      {open ? (
        <input
          autofocus
          type='text'
          className='bg-gray-300 w-full border-none font-semibold text-xl'
          value={sText}
          onBlur={() => setOpen(!open)}
          onChange={(e) => setSText(e.target.value)}
        />
      ) : (
        <div className="flex justify-between p-1 items-center">
          <p onClick={() => setOpen(!open)} className='flex-1 font-semibold text-xl'>{sText}</p>
          <FiMoreHorizontal />
        </div>
      )}
    </div>
  );
}

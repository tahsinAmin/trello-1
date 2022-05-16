import { useEffect, useState } from "react";
import List from "../components/List/List";
import store from '../utils/store'
import StoreApi from "../utils/storeApi";
import { v4 as uuid } from 'uuid';
import { Collapse, useDisclosure } from "@chakra-ui/react";


export default function Home() {

  const cards = [
    {
      id: 'card-1',
      title: 'Learning how to cook',
    },
    {
      id: 'card-2',
      title: 'Making sandwich',
    },
    {
      id: 'card-3',
      title: 'Taking the trash out',
    },
  ];

  const [data, setData] = useState(cards)
  const [text, setText] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const addMoreCard = (cardTitle, listId) => {
  //   const newCardId = uuid()
  //   const newCard = {
  //     id: newCardId,
  //     title: cardTitle
  //   }

  //   const list = data.lists[listId]
  //   list.cards = [...list.cards, newCard]
  //   const newState = {
  //     ...data,
  //     lists: {
  //       ...data.lists,
  //       [listId]: list,
  //     }
  //   }
  //   setData(newState)
  // }

  // useEffect(() => {
  // }, [data])

  const handleSubmit = () => {
    const newCardId = uuid()

    let newCard = {
      id: newCardId,
      title: text,
    }
    console.log(newCard, "<= newCard");
    setData([...data, newCard])
    onClose()
  }

  return (
    <div className="m-1 bg-blue-300">
      {data.map((card) => {
        return <p key={card.id}>{card.title}</p>
      })}
      {isOpen ? (
        <Collapse in={isOpen} animateOpacity>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button
            onClick={handleSubmit}
            type="button" className="btnConfirm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add Card
          </button>
        </Collapse>
      ) : (
        <div className="hover:bg-slate-300 cursor-pointer" onClick={onOpen}>Add Card..</div>
      )}
    </div>
  );
}

// https://youtu.be/7C-6jYdG4eg?t=936
import { useEffect, useState } from "react";
import List from "../components/List/List";
import store from '../utils/store'
import StoreApi from "../utils/storeApi";
import { v4 as uuid } from 'uuid';


export default function Home() {
  const [data, setData] = useState(store)
  const addMoreCard = (cardTitle, listId) => {
    const newCardId = uuid()
    const newCard = {
      id: newCardId,
      title: cardTitle
    }

    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      }
    }
    setData(newState)
  }

  useEffect(() => {
  }, [data])

  return (
    <StoreApi.Provider value={{ addMoreCard }}>
      <div className="m-1">
        {data.listIds.map((listId) => {
          const list = data.lists[listId]
          return <List key={listId} list={list} setData={setData} />
        })}
      </div>
    </StoreApi.Provider>

  );
}
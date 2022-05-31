import { useEffect, useState } from "react";
import List from "../components/List/List";
import store from '../utils/store'
import StoreApi from "../utils/storeApi";
import { v4 as uuid } from 'uuid';
import InputContainer from '../components/Input/InputContainer'
import { Box, Button, Collapse, Flex, HStack, Wrap } from "@chakra-ui/react"

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

  const addMoreList = (listTitle) => {
    const listId = uuid()
    const newLists = {
      ...data.lists,
      [listId]: {
        id: listId,
        title: listTitle,
        cards: []
      }
    }
    const newListIds = [...data.listIds, listId]
    setData({ ...data, lists: newLists, listIds: newListIds })
  }

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    };
    setData(newState)
  }


  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }
    }>
      <Box minHeight={"100vh"} className="p-1 bg-emerald-200">
        <Wrap className="p-1">
          {data.listIds.map((listId) => {
            const list = data.lists[listId]
            return <List key={listId} list={list} setData={setData} />
          })}
          <InputContainer type={"List"} />
        </Wrap>
      </Box>
    </StoreApi.Provider>
  );
}
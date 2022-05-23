import { useEffect, useState } from "react";
import List from "../components/List/List";
import store from '../utils/store'
import StoreApi from "../utils/storeApi";
import { v4 as uuid } from 'uuid';
import InputContainer from '../components/Input/InputContainer'
import { Box, Button, Collapse, Flex } from "@chakra-ui/react"

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

  return (
    <StoreApi.Provider value={{ addMoreCard }}>
      <Box minHeight={"100vh"} className="m-1 bg-emerald-200">
        <Flex className="m-1" >
          {data.listIds.map((listId) => {
            const list = data.lists[listId]
            return <List key={listId} list={list} setData={setData} />
          })}
          <InputContainer type={"List"} />
        </Flex>
      </Box>
    </StoreApi.Provider>

  );
}
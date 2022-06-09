import { useEffect, useState } from "react";
import List from "../components/List/List";
import store from '../utils/store'
import StoreApi from "../utils/storeApi";
import { v4 as uuid } from 'uuid';
import InputContainer from '../components/Input/InputContainer'
import { Box, Button, Collapse, Flex, HStack, Wrap } from "@chakra-ui/react"
import { DragDropContext } from "react-beautiful-dnd";

export default function Home() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(process.browser);
  }, [])

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

  const deleteListById = (listId) => {
    console.log("=> BEfore data", data);
    const someData = data.lists
    console.log("==> In Some data , we have", someData)
    delete someData[listId]

    console.log("==> After cleaning, Some data we have", someData)
    console.log("=> filteredLists ", someData);
    console.log("3. ", someData)

    console.log("=> Before newListIds ", data.listIds)

    const newListIds = data.listIds.filter(l => l !== listId)
    console.log("=> After newListIds ", newListIds)

    const newState = {
      ...data,
      lists: {
        ...someData
      },
      listIds: newListIds,
    };


    console.log("=> After data", newState);


    setData(newState)
  }

  // listIds: ['list-1'],

  // const onDragEnd = () => {

  // }


  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle, deleteListById }}>
      {isBrowser ? <DragDropContext
      // onDragEnd={onDragEnd}
      >
        <Box as={Wrap} minHeight={"100vh"} className="p-1 bg-emerald-200">
          {data.listIds.map((listId) => {
            const list = data.lists[listId]
            return <List key={listId} list={list} />
          })}
          <InputContainer type={"List"} />
        </Box>
      </DragDropContext> : null}

    </StoreApi.Provider>
  );
}
import { useState } from "react";
import List from "../components/List/List";
import store from '../utils/store'

export default function Home() {
  const [data, setData] = useState(store)
  return (
    <div className="m-1">
      {data.listIds.map((listId) => {
        const list = data.lists[listId]
        return <List list={list} key={listId} />
      }
      )}

    </div>
  );
}

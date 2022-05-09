import { useState } from "react";
import Card from "../Card/Card";
import InputContainer from "../Input/InputContainer";
import Title from "../Title/Title";

export default function List() {
  return (
    <div className='bg-gray-200 w-64 border-1 p-1 pl-0 shadow-lg rounded-sm'>
      <Title />
      <Card />
      <Card />
      <Card />
      <InputContainer />
    </div>
  );
}

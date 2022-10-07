import React from "react";
import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// button-group
const buttons = [
  {
    type: "all",
    label: "All",
  },
  {
    type: "active",
    label: "Active",
  },
  {
    type: "done",
    label: "Done",
  },
];

const itemsData = [
  {
    key: uuid(),
    label: "Have fun",
  },
  {
    key: uuid(),
    label: "Spread Empathy",
  },
  {
    key: uuid(),
    label: "Generate Value",
  },
];

function App()
  const [itemToDo, setItemTodo] = useState("");
  const [items, setItems] = useState(
      JSON.parse(localStorage.getItem('items')) ||
      itemsData);
  const [type, setType] = useState("all");

  const [textSearch , setTextSearch] = useState("");

  const handleItemToDo = (event) => {
    setItemTodo(event.target.value);
  };


//add
  const handleAddItem = () => {
    const newObj = { key: uuid(), label: itemToDo };
    setItems([newObj, ...items]);
    setItemTodo("");
    localStorage.setItem('items' ,JSON.stringify([newObj, ...items]));
  };
// done
  const handleItemDone = (key) => {
    const newArray = items.map((item) => {
      if (item.key === key) {
        return { ...item, isDone: !item.isDone };
      } else return item;
    });

    setItems(newArray);

    localStorage.setItem('items' ,JSON.stringify(newArray));
  };


  ////handle important//////////////////////////////////////////
  const handelImprortantItem = (key) =>{

    const newArray = items.map((item) => {
      if (item.key === key) {
        return { ...item, isImportant: !item.isImportant };
      } else return item;
    });

    setItems(newArray);

    localStorage.setItem('items' ,JSON.stringify(newArray));

  }

  //handleDelete
  const handelDeleteItem = (key)=>{
    setItems((prevItems) => prevItems.filter((item) => item.key !== key) );

    const newItems = items.filter((item) => item.key !== key)
    localStorage.setItem('items', JSON.stringify(newItems))

  }







  const handleChangeStatus = (type) => {
    setType(type);
  };

  const doneItems = items.filter((item) => item.isDone);
  const notDoneItems = items.filter((item) => !item.isDone);



  const filteredItems =
      type === "active" ? notDoneItems : type === "done" ? doneItems : items;
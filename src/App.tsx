import * as React from "react";
import GroceryList from "../GroceryList";
import "./styles.css";

const App = () => {
  const [localArray, setLocalArray] = React.useState([]);
  const [newListItem, setNewListItem] = React.useState({});

  React.useState(() => {
    localStorage.setItem("localArray", JSON.stringify(localArray));
  });

  const handleNewItem = (value: string) => {
    setNewListItem({ value, checked: false });
  };

  const addItem = event => {
    event.preventDefault();
    if (!newListItem) return;
    setLocalArray([...localArray, { ...newListItem }]);
    localStorage.setItem(
      "localArray",
      JSON.stringify([...localArray, { ...newListItem }])
    );
    setNewListItem({ value: "", checked: false });
  };

  const deleteItem = (index: number) => {
    const arrayFromLocal = JSON.parse(localStorage.getItem("localArray"));
    arrayFromLocal.splice(index, 1);
    setLocalArray(arrayFromLocal);
    localStorage.setItem("localArray", JSON.stringify(arrayFromLocal));
  };

  const handleCheck = (idx: number) => {
    const arrayFromLocal = JSON.parse(localStorage.getItem("localArray"));
    arrayFromLocal.map((el, i) => {
      if (i === idx) {
        el.checked = !el.checked;
      }
    });
    setLocalArray(arrayFromLocal);
    localStorage.setItem("localArray", JSON.stringify(arrayFromLocal));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <GroceryList
        listArr={localArray}
        addItem={addItem}
        deleteItem={deleteItem}
        handleNewItem={handleNewItem}
        newListItem={newListItem}
        handleCheck={handleCheck}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default App;

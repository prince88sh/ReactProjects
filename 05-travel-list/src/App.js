import "./index.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴 Far Away 👜</h1>;
};

const Form = () => {
  //Controlled Elemnt to use in React (STEPS)
  // 1. Create a piece of state to hold the value of the input
  const [description, setDescription] = useState("");
  // 2. add piece of state in the input element
  // 3. Create a function to handle the change event (need to connecty he state so whatever type it )
  const [quantity, setquantity] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault(); // to make SPA (REACT MOTIVE)
    console.log("Printing Event as 'e'--->", e);

    if (!description) return; // if there is no description then return (once user click on add button /enter)

    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log("Printing newItem--->", newItem);

    setDescription(""); // to clear the input field after adding the item
    setquantity(1); // to set the quantity to 1 after adding the item
  };
  // onSubmit will handle both enter and on CLick event

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for a Trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

const PackagingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Items = (props) => {
  return (
    <li>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>👜 You have X item on the list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;

import "./App.css";

import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is JS framework"
  },
  {
    title: "Why use React?",
    content: "React is favorite JS library among developers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components."
  }
];

const options = [
  {
    label: "The color of red",
    value: "red"
  },
  {
    label: "The color of green",
    value: "green"
  },
  {
    label: "The shade of blue",
    value: "blue"
  }
];
// <Accordion items={items} />
// <Search />
{
  /* <button onClick={() => setShowDropdown(!showDropdown)}>
  Toggle dropdown
</button>
{showDropdown ? (
  <Dropdown
    options={options}
    selected={selected}
    onSelectedChange={setSelected}
  />
) : null} */
}

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      <Translate />
    </>
  );
};

export default App;

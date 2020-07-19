import "./App.css";

import Accordion from "./components/Accordion";
import React from "react";
import Search from "./components/Search";

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
// <Accordion items={items} />

const App = () => {
  return (
    <>
      <Search />
    </>
  );
};

export default App;

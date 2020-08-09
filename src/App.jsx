import "./App.css";

import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Menu from "./components/Menu";
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

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <Router>
        <h2>Widgets application</h2>
        <Menu />

        <Switch>
          <Route path="/" exact>
            <Accordion items={items} />
          </Route>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Dropdown
              label="Select color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

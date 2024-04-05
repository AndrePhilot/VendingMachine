import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Snickers from "./Snickers";
import Soda from "./Soda";
import Chips from "./Chips";
import VendingMachine from "./VendingMachine";
import { v4 as uuid } from "uuid";
import NavBar from "./NavBar";

function App() {
  const INITIAL_VALUES = ["snickers", "soda", "chips"];
  const [snacks, setSnacks] = useState(INITIAL_VALUES);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacks={snacks}/>
        <VendingMachine snacks={snacks}/>
        <Routes>
          {snacks.map(snack => (
            <Route
              key={uuid()}
              path={`/${snack}`}
              element={snack === 'snickers' ? <Snickers /> 
                : snack === 'soda' ? <Soda /> 
                : snack === 'chips' ? <Chips /> 
                : null}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

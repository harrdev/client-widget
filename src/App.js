import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Widgets from "./components/Widgets";
import ShowWidget from "./components/ShowWidget";
const database = "http://localhost:8000/Widgets";

function App() {
  const [widget, setWidget] = useState([]);
  const [addButtonClick, setAddButtonClick] = useState(false);

  useEffect(() => {
    getAllWidgets();
  }, [addButtonClick]);

  // API call to database to get all saved widgets and save to widget state to pass to children
  const getAllWidgets = () => {
    console.log("App.js getAllWidgets called");
    axios.get(database).then((res) => {
      let widgetArray = [];
      res.data.widget.map((w) => {
        return widgetArray.push(w);
      });
      setWidget(widgetArray);
    });
  };
  // Work in progress, logic to show/hide edit/add forms based on submit button being clicked
  const addClick = () => {
    if (!addButtonClick) {
      console.log("addClick Show Form");
      setAddButtonClick(true);
    } else {
      console.log("addClick Hide Form");
      setAddButtonClick(false);
    }
  };

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Widgets
              widgets={widget}
              addClick={addClick}
              addButtonClick={addButtonClick}
              setAddButtonClick={setAddButtonClick}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <ShowWidget
              widgets={widget}
              addClick={addClick}
              addButtonClick={addButtonClick}
              setAddButtonClick={setAddButtonClick}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;

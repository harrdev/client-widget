import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Widgets from "./components/Widgets";
import ShowWidget from "./components/ShowWidget";
const database = "http://localhost:8000/Widgets";

function App() {
  const [widget, setWidget] = useState([]);

  useEffect(() => {
    getAllWidgets();
  }, []);

  // API call to database to get all saved widgets and save to widget state to pass to children
  const getAllWidgets = () => {
    console.log("App.js getAllWidgets called")
    axios.get(database).then((res) => {
      let widgetArray = [];
      res.data.widget.map((w) => {
        widgetArray.push(w);
      });
      setWidget(widgetArray);
    });
  };

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Widgets widgets={widget} />} />
        <Route path="/:id" element={<ShowWidget widgets={widget} />} />
      </Routes>
    </Fragment>
  );
}

export default App;

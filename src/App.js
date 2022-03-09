import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Widgets from "./components/Widgets";
// import { getWidgets } from "./api/widgets";

function App() {
  const [widget, setWidget] = useState([]);

  useEffect(() => {
    getAllWidgets();
  }, []);

  const getAllWidgets = () => {
    axios.get("http://localhost:8000/Widgets").then((res) => {
      console.log("Here are the widgets: ", res);
      let widgetArray = [];
      res.data.widget.map((w) => {
        widgetArray.push(w);
      });
      setWidget(widgetArray);
    });
  };

  return <Widgets widgets={widget} />;
}

export default App;

import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Widgets from "./components/Widgets";

function App() {
  return <Widgets />;
}

export default App;

import { Link } from "react-router-dom";
import AddWidget from "./AddWidget";
import { getWidgets } from "../api/widgets";
import { useEffect, useState } from "react";

const Widgets = ({ widgets }) => {
  const [allSavedWidgets, setAllSavedWidgets] = useState([]);

  useEffect(() => {
    getWidgets().then((res) => {
      let widgetArray = [];
      res.data.widget.map((widget) => {
        return widgetArray.push(widget);
      });
      setAllSavedWidgets(widgetArray);
    });
  }, []);

  const allWidgets = widgets.map((widget, i) => {
    return (
      <li key={i}>
        <div>
          <Link
            to={`${widget.name}`}
            style={{ fontSize: "25px", padding: "15px" }}
          >
            {widget.name}
          </Link>
        </div>
      </li>
    );
  });

  return (
    <div className="container">
      <h1>Widgets Component</h1>
      <div className="addWidget">
        <AddWidget />
      </div>
      <div className="allWidgets">
        <ul>{allWidgets}</ul>
      </div>
    </div>
  );
};

export default Widgets;

import { Link } from "react-router-dom";
import AddWidget from "./AddWidget";
import { getWidgets, deleteWidget } from "../api/widgets";
import { useEffect, useState } from "react";

const Widgets = ({ widgets }) => {
  const [allWidgets, setAllWidgets] = useState([]);

  // useEffect(() => {
  //   getWidgets().then((res) => {
  //     let widgetArray = [];
  //     res.data.widget.map((widget) => {
  //       return widgetArray.push(widget);
  //     });
  //     setAllWidgets(widgetArray);
  //   });
  // }, []);

  console.log("Widgets: ", widgets);
  useEffect(() => {
    let widgetArray = [];
    widgets.map((widget) => {
      return widgetArray.push(widget);
    });
    setAllWidgets(widgetArray);
  }, [widgets]);

  const removeWidget = (widget) => {
    deleteWidget(widget._id).then((res) => {
      getWidgets()
        .then((res) => {
          let widgetsArray = [];
          res.data.widget.map((widget) => {
            return widgetsArray.push(widget);
          });
          setAllWidgets(widgetsArray);
          alert("Widget Deleted!");
        })
        .catch((error) => {});
    });
  };

  const showAllWidgets = allWidgets.map((widget, i) => {
    return (
      <li key={i}>
        <div>
          <Link
            to={`${widget.name}`}
            style={{ fontSize: "25px", padding: "15px" }}
          >
            {widget.name}
          </Link>
          <div className="widgetRemoveButton">
        <button className="removeButton" onClick={() => removeWidget(widget)}>
          Delete Widget
        </button>
      </div>
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
        <ul>{showAllWidgets}</ul>
      </div>
    </div>
  );
};

export default Widgets;

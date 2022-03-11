import { Link } from "react-router-dom";
import { getWidgets, deleteWidget } from "../api/widgets";
import { useEffect, useState } from "react";
import AddForm from "./AddForm";

const Widgets = (props) => {
  const { widgets } = props;
  const [allWidgets, setAllWidgets] = useState([]);

  useEffect(() => {
    let widgetArray = [];
    widgets.map((widget) => {
      return widgetArray.push(widget);
    });
    setAllWidgets(widgetArray);
  }, [widgets]);

  // Remove Widget function that updates allWidgets state upon deletion
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

  const updateState = (addedWidget) => {
    getWidgets()
      .then((res) => {
        let widgetsArray = [];
        res.data.widget.map((widget) => {
          return widgetsArray.push(widget);
        });
        setAllWidgets(widgetsArray);
      })
      .catch((err) => {
        console.log(err);
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
            <button
              className="removeButton"
              onClick={() => removeWidget(widget)}
            >
              Delete Widget
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="container">
      <h1>Widgets</h1>
      <button onClick={props.addClick}>Add Widget</button>
      <div className="addWidget">
        {props.addButtonClick && <AddForm props={props} update={updateState} />}
      </div>
      <div className="allWidgets">
        <ul>{showAllWidgets}</ul>
      </div>
    </div>
  );
};

export default Widgets;

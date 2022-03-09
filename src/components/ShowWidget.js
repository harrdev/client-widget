import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteWidget, getWidgets } from "../api/widgets";

const WidgetDetails = ({ widgets }) => {
  const [myWidget, setMyWidget] = useState([]);
  const thisWidget = useParams();

  // Filter useParams data to equal database widget data
  const widgetData = widgets.filter((widget) => widget.name === thisWidget.id);
  const w = widgetData[0];

  const removeWidget = (w) => {
    deleteWidget(w._id).then((res) => {
      getWidgets()
        .then((res) => {
          let widgetsArray = [];
          res.data.widget.map((widget) => {
            return widgetsArray.push(widget);
          });
          setMyWidget(widgetsArray);
        })
        .catch((error) => {});
    });
  };

  return (
    <div className="container">
      <div className="filmRemoveButton">
        <button className="removeButton" onClick={() => removeWidget(w)}>
          Delete Widget
        </button>
      </div>
      <p>Name: {w.name}</p>
      <p>Type: {w.type}</p>
      <p>Quantity: {w.quantity}</p>
      <p>Cost: {w.cost}</p>
      <p>Manufacturer: {w.manufacturer}</p>
      <p>Notes: {w.notes}</p>
    </div>
  );
};

export default WidgetDetails;

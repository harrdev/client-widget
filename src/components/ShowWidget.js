import { useParams } from "react-router-dom";

const WidgetDetails = ({ widgets }) => {
  const thisWidget = useParams();
  // Filter useParams data to equal database widget data
  const widgetData = widgets.filter((widget) => widget.name === thisWidget.id);
  const w = widgetData[0];

  return (
    <div className="container">
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

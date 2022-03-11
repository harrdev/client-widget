import { useParams } from "react-router-dom";
import EditWidget from "../components/EditWidget";

const WidgetDetails = (props) => {
  const { widgets } = props
  const thisWidget = useParams();
  // Filter useParams data to equal database widget data
  const widgetData = widgets.filter((widget) => widget.name === thisWidget.id);
  const w = widgetData[0];
  // Converts UTC time from MongoDB to local timezone
  const localTime = new Date(w.updatedAt);
  const time = localTime.toString();

  return (
    <div className="container">
      <div className="editForm">
        <button onClick={props.addClick}>Edit Widget</button>
        {props.addButtonClick && <EditWidget widget={w} />}
      </div>
      <p>Updated at: {time}</p>
      <p>Name: {w.name}</p>
      <p>Type: {w.type}</p>
      <p>Quantity: {w.quantity}</p>
      <p>Cost: {w.cost}</p>
      <p>Manufacturer: {w.manufacturer}</p>
      <p>Created At: {w.madeAt}</p>
      <p>Notes: {w.notes}</p>
    </div>
  );
};

export default WidgetDetails;

import { useState, useEffect } from "react";
import { editWidget } from "../api/widgets";

const EditWidget = (props) => {
  const [inputs, setInputs] = useState({});
  const id = props.widget._id;

  console.log("inputs is: ", inputs);
  console.log("Props.widget is: ", props.widget);
  
  useEffect(() => {
    setInputs(props.widget);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editWidget(inputs, id);
    alert("Widget Updated!");
  };

  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          value={inputs.name}
          name="name"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="type">Choose a Type:</label>
        <select className="input" name="type" id="type" onChange={handleChange}>
          <option>Select a Type from dropdown</option>
          <option value="CPU">CPU</option>
          <option value="Motherboard">Motherboard</option>
          <option value="RAM">RAM</option>
          <option value="Graphics Card">Graphics Card</option>
        </select>
        <br />

        <label htmlFor="quantity">Quantity</label>
        <input
          className="input"
          type="number"
          value={inputs.quantity}
          name="quantity"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="cost">Cost</label>
        <input
          className="input"
          type="text"
          value={inputs.cost}
          name="cost"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          className="input"
          type="text"
          value={inputs.manufacturer}
          name="manufacturer"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="madeAt">Created at:</label>
        <input
          className="input"
          type="datetime-local"
          id="madeAt"
          name="madeAt"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="notes">Notes</label>
        <textarea
          className="input"
          type="text"
          value={inputs.notes}
          name="notes"
          onChange={handleChange}
        />
        <br />

        <input type="submit" value="Edit Widget" />
      </form>
    </div>
  );
};

export default EditWidget;

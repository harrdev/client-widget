import { useState } from "react";
import { addWidget } from "../api/widgets";

const AddWidget = (props) => {
  console.log("addwidget props: ", props);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWidget(inputs);
    alert("Widget added");
  };

  //******** To get field from backend, API call to server and .map through the "types" and pass data to <select> input below *********/

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          id="name"
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
          id="quantity"
          name="quantity"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="cost">Cost</label>
        <input
          className="input"
          type="text"
          id="cost"
          name="cost"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          className="input"
          type="text"
          id="manufacturer"
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
          id="notes"
          name="notes"
          onChange={handleChange}
        />
        <br />

        <input type="submit" value="Add a Widget" />
      </form>
    </div>
  );
};

export default AddWidget;

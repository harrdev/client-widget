import { useState } from "react";
import { addWidgets } from "../api/widgets";

const AddWidget = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWidgets(inputs);
    alert("Widget added to your favorites");
  };

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

        <label htmlFor="type">Type</label>
        <input
          className="input"
          type="text"
          id="type"
          name="type"
          onChange={handleChange}
        />
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

        <label htmlFor="notes">Notes</label>
        <textarea
          className="input"
          type="text"
          id="notes"
          name="notes"
          onChange={handleChange}
        />
        <br />

        <input onClick={props.addClick} type="submit" value="Add a Widget" />
      </form>
    </div>
  );
};

export default AddWidget;

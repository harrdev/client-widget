import { useState, useEffect } from "react";
import { editWidget } from "../api/widgets";

const EditWidget = (props) => {
  const [inputs, setInputs] = useState({});
  const id = props.widget._id;
  // The following propArray and useEffect is an attempt to avoid the uncontrolled change of input error.  Work in progress
  const propArray = [];
  propArray.push(props.widget);

  useEffect(() => {
    setInputs(propArray[0]);
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

        <label htmlFor="type">Type</label>
        <input
          className="input"
          type="text"
          value={inputs.type}
          name="type"
          onChange={handleChange}
        />
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

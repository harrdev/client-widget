import { useState } from "react";
import { addWidget } from "../api/widgets";
import { Editor } from "@tinymce/tinymce-react";

const AddForm = (props) => {
  console.log("Props are: ", props);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleText = (event) => {
    const value = event;
    setInputs({...inputs, notes: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWidget(inputs);
    alert("Widget added");
  };

  //******** To get field from backend, create function that does API call to server and .map through the "types" and pass data to <select><option value={type}> input below *********/

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit} onClick={props.addClick}>
        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
        />
        <br />

        <label htmlFor="type">Choose a Type:</label>
        <select
          className="input"
          type="select"
          name="type"
          id="type"
          required
          onChange={handleChange}
        >
          <option>Select a Type</option>
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
          required
          onChange={handleChange}
        />
        <br />

        <label htmlFor="cost">Cost</label>
        <input
          className="input"
          type="text"
          id="cost"
          name="cost"
          required
          onChange={handleChange}
        />
        <br />

        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          className="input"
          type="text"
          id="manufacturer"
          name="manufacturer"
          required
          onChange={handleChange}
        />
        <br />

        <label htmlFor="madeAt">Created at:</label>
        <input
          className="input"
          type="datetime-local"
          id="madeAt"
          name="madeAt"
          required
          onChange={handleChange}
        />
        <br />

        <label htmlFor="notes">Notes</label>
        <Editor
          type="text"
          id="notes"
          name="notes"
          required
          value={inputs.notes}
          init={{
            height: 200,
            width: 400,
            menubar: false,
          }}
          onEditorChange={handleText}
        />

        <input type="submit" value="Add a Widget" onClick={props.addClick} />
      </form>
    </div>
  );
};

export default AddForm;

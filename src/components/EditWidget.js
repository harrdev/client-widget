import { useState } from "react";
import { editWidget } from "../api/widgets";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const EditWidget = (props) => {
  const [inputs, setInputs] = useState({});
  // id to pass to patch API call
  const id = props.widget._id;
  let navigate = useNavigate();

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
    editWidget(inputs, id);
    alert("Widget Updated!");
    navigate("/");
  };

  return (
    <div className="editForm">
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
        <select
          className="input"
          type="select"
          name="type"
          id="type"
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
        <Editor
          type="text"
          id="notes"
          name="notes"
          value={inputs.notes}
          init={{
            height: 200,
            width: 400,
            menubar: false,
          }}
          onEditorChange={handleText}
        />

        <input type="submit" value="Edit Widget" />
      </form>
    </div>
  );
};

export default EditWidget;

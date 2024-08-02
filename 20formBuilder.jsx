import * as React from "react";

export default function FormBuilder() {
  //Add state to have an empty array where we store the fields
  const [formFields,setFormFields] = React.useState([]);

  const handleAddFormField = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    const newField = {
      id: new Date().getTime(),
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: ""
    };

    //Call setformFields spreading the current array and adding the new field
    setFormFields([...formFields,newField])
    e.target.reset

  };

  const handleUpdateFormField = (id, updatedField) =>{
    //To update the fields we map over the array checking if the id matches the one we passed as an argument
    //spreading the existing fields into a new object, and then spreading the updatedField object into it as well
    //creating the new object with the updated values.
    const updatedFormFields = formFields.map((field) =>
      field.id === id ? {...field, ...updatedField} : field
    );
    setFormFields(updatedFormFields);
  };

  const handleDeleteFormField = (id) => {
    //Filter out the id of the field that matches the id we passed as an argument
    const updatedFormFields = formFields.filter((field) => field.id == id)
    setFormFields(updatedFormFields)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}>
        <fieldset>
          <legend>Add a field</legend>
          <label htmlFor="type">Field Type</label>
          <select name="type" id="type">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div>
            <label htmlFor="required">Required</label>
            <input type="checkbox" name="required" id="required" />
          </div>
          <label htmlFor="label">Label</label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
          />
          <label htmlFor="placeholder">Placeholder</label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
          />
          <button type="submit" className="secondary">
            Add Form Field
          </button>
        </fieldset>
      </form>
      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form Fields</legend>
          <ul>
            {formFields.map((field) => (
              <li key={field.id}>
                <label htmlFor={`input-${field.id}`}>{field.label}</label>
                <input
                  id={`input-${field.id}`}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    handleUpdateFormField(field.id, { value: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="secondary"
                  onClick={() => handleDeleteFormField(field.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <span>Your form fields will show here</span>
          <button className="primary">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

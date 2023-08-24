import React, { useState } from "react";
import Box from './Box';



const initialState = { height: "", width: "", backgroundColor: "" };

/** Form for creating a new box to add to a list.
 *
 * Has state for the height/width/backgroundColor of the item; on submission,
 * sends {heigt, width, backgroundColor} to fn rec'd from parent.
 *
 * NewBoxForm -> Box
 */
function NewBoxForm({addBox}) {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="width"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="backgroundColor"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new item!</button>
    </form>
  );


}

export default NewBoxForm;
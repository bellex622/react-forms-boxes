import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

/** Box list: manages boxes in the list
 *
 * State:
 * - boxes: array like [ { height, width, bgc }, ... ]
 *
 * BoxList -> NewBoxForm
 *
 * BoxList -> Box
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  console.log("boxlist", boxes);
  function renderBoxes() {
    console.log("renderBoxes");
    return (
      boxes.map(box => {
          <Box
            backgroundColor = {box.backgroundColor}
            width={box.width}
            height={box.height}
          />
      })
    );
  }

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;

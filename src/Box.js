import React from "react";


/** A single box
 * props:
 * -backgroundColor
 * -width
 * -height
 *
 * Return a single box with bgc, width and height
 */
function Box({backgroundColor, width, height}){
  const style = {
    backgroundColor:backgroundColor,
    width:width,
    height:height
  }
  return (
    <div className="Box" style={style}>

    </div>
  )

}

export default Box;
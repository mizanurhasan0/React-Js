import React from "react";

const Squired = ({ val, chooseSquire }) => {
  return (
    <div className="SquiredBox" onClick={chooseSquire}>
      {val}
    </div>
  );
};
export default Squired;

import React, { useState } from "react";

export default function Ex3_Func() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      {isOn && (
        <p>
          askdfyb alsidyufh asodiufygh asdlfiuhasdlf asliduhf alsiduhf
          asd;iolfhja sdflaiusdh fails;duhf ;asdoi
        </p>
      )}
      <button
        onClick={() => {
          setIsOn((prevState) => !prevState);
        }}
      >
        show paragraph
      </button>
    </div>
  );
}

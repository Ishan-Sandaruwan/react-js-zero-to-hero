import React, { useRef } from "react";

export default function Ex2_UseRef() {
  const inputRef = useRef("");
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
}

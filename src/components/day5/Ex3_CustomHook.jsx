import React, { useRef, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const get = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  const save = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const remove = () => {
    try {
      setStoredValue(initialValue); // or use undefined if preferred
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, save, remove, get];
}

export default function Ex3_CustomHook() {
  const inputRef = useRef(null);
  const [storedValue, save, remove, get] = useLocalStorage("message", "");

  const handleSave = () => {
    if (inputRef.current) {
      save(inputRef.current.value);
      inputRef.current.focus();
    }
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleRemove = () => {
    remove();
    handleClear();
  };

  const handleLoad = () => {
    const txt = get();
    if (inputRef.current) {
      inputRef.current.value = txt || "not saved data";
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue={storedValue} />
      <br />
      <button onClick={handleSave}>save</button>
      <br />
      <button onClick={handleClear}>clear</button>
      <br />
      <button onClick={handleLoad}>get</button>
      <br />
      <button onClick={handleRemove}>remove</button>
      <br />
    </div>
  );
}

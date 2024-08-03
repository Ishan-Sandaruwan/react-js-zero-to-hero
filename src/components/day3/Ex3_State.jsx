import React, { useState } from "react";

// Exercise 3: Create a functional component Form with useState to manage form input fields for name and email.

export default function Ex3_State() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <div>
      <div>
        <span>name</span>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData((prevData) => ({ ...prevData, name: e.target.value }));
          }}
        />
        <span>email</span>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => {
            setFormData((prevData) => ({ ...prevData, email: e.target.value }));
          }}
        />
      </div>
      <div>
        hello {formData.name} and your mail is {formData.email}
      </div>
    </div>
  );
}

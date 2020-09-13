import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    //const newValue = event.target.value;
    //const inputName = event.target.name;
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (/* inputName */ name === "fName") {
        return {
          fName: value /* newValue */,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          lName: value /* newValue */,
          fName: prevValue.fName,
          email: prevValue.email
        };
      } else {
        return {
          lName: prevValue.lName,
          fName: prevValue.fName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

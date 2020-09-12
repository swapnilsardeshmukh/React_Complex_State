import React, { useState } from "react";

function App() {
  const [fullName, setFullname] = useState({
    fName: "",
    lName: ""
  });

  function updateName(event) {
    //const newValue = event.target.value;
    //const inputName = event.target.name;

    const { name, value } = event.target;

    setFullname((prevValue) => {
      if (/* inputName */ name === "fName") {
        return {
          fName: value /* newValue */,
          lName: prevValue.lName
        };
      } else {
        return {
          lName: value /* newValue */,
          fName: prevValue.fName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={updateName}
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={updateName}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

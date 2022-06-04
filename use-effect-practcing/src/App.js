import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect with empty default array as second argument
  // will run only once when the component is mounted
  // when: after the first render

  useEffect(() => {
    if (name || phone) {
      console.log(name, phone);
    }
  }, [name, phone]);

  return (
    <div className="App">
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <br />
      <label>Phone</label>
      <input
        onChange={(e) => {
          return setPhone(e.target.value);
        }}
        value={phone}
      />
      <p>
        name: {name} <br />
        phone: {phone}
      </p>
    </div>
  );
}

export default App;

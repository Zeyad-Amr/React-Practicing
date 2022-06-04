import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  //1
  // rules for all useEffect statues:
  //render
  //useEffect

  //useEffect with empty dependency array
  //run one time only
  //when: after first render
  // }, []);

  // useEffect(() => {
  //   //ADD UR CODE
  //   console.log("use effect one time");
  // }, []); //useeffect dependency array

  // ------------------------------------- //
  //2
  //useEffect with not empty dependency array
  //run when update happen
  //when: after first render, and when dependency updated

  //render
  //useEffect
  //update the state -> re-render (sec render)
  //UseEffect -> watcher -> dependency -> name ? updated -> yes -> do the effect / no -> skip the effect

  // useEffect(() => {
  //   //ADD UR CODE
  //   if (name || phone) {
  //     console.log("update");
  //   }
  // }, [name, phone]); //useeffect dependency array
  // //watcher -> state / props / var
  //use effect -> return clean / init clean

  // ------------------------------------- //
  //3
  //useEffect with no dependency array
  //run when update happen
  //when: run after first render, and after re-render
  // useEffect(() => {
  //   console.log("effect");
  // });

  //render
  //change->state
  //re render
  //use Effect

  // ------------------------------------- //
  //clean up

  useEffect(() => {
    //   const timeOut = setTimeout(() => {
    //     console.log(name);
    //   }, 2000);
    return () => {
      // clearTimeout(timeOut);
      console.log("Cleared");
    };
  });
  console.log("render");
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

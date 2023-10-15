import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [onButton, setOnButton] = useState("");
  const [buttonOver, setButtonOver] = useState(false);

  function handleButton(event){
    setOnButton(name);

    event.preventDefault();
  }

  function handleChange(event){
    setName(event.target.value);
  }

  function handleOnMouseOver(){
    setButtonOver(true);
  }

  function handleOnMouseOut(){
    setButtonOver(false);
  }

  return (
    <div className="container">
      
      <h1>Hello {onButton}</h1>

      <form onSubmit= {handleButton}>     
        <input onChange={handleChange}
        type="text" placeholder="What's your name?" />
        <button
        style={
          {backgroundColor: buttonOver ? "black" : "white" }
        }
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        >Submit</button>
      </form>
    </div>);
}

export default App;

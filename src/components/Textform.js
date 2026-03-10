import React, { useState } from "react";

export default function Textform(props) {
  
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
      props.showAlert("Converted to lowercase!","success")
  };
  const handleClearClick = () => {
    let newText ="";
    setText(newText)
      props.showAlert("Text was Clear!","success")
    };
  const handleCopyClick = async () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text was copied to clipboard!","success")
    
    };
  const handleCapital =() => {
    let newtext =text.split(" ").map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ");
    setText(newtext);
      props.showAlert("Converted to Capitalized!","success")
    };
    const handleExtraSpaces = () =>{
    let newtext = text.replace(/\s+/g, ' ').trim();
     setText(newtext);
      props.showAlert("Extra spaces was removed!","success")
    };


  const [text, setText] = useState("");

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows={8}
        ></textarea>
      </div>
      <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
        Copy text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCapital}>
     Capitalized
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
     Remove Extra spaces
      </button>
    </div>
    <div className="container my-3">
      <h2>Your text summery</h2>
      <p> {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.replace(/\s+/g,"").length} characters</p>
      {/* another way: */}
      {/* <p> {text.trim() ? text.trim().split(/\s+/).length : 0} words and {text.replace(/\s+/g,"").length} characters</p> */}
      <p>  {text.trim().length === 0?"0":text.trim().split(/\s+/).length / 200 } minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something in the text area to preview it here"}</p>
    </div>
    </>
  );
}



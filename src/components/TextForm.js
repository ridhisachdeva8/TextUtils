import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("It's cleared! Write something","success");
  };
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Your text is reversed!","success");
  };
  //In Comments:
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text is copied!","success");
  };
  //In Commnets:
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed, Yayy!","success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  const wordCount = (text) => {
   // let regex = /\s+/;
    let numOfWords = text.split(" ").filter((element)=>{return element.length!==0});
    return numOfWords.length;
};
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#022962" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(23, 84, 173)" : "white",
              color: props.mode === "dark" ? "white" : "#022962",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#022962" }}
      >
        <h2>Your Text Summary</h2>
        <p>
        {text===""? 0 : wordCount(text)} words and {text.length} characters
        </p>
        <p>
        { text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}

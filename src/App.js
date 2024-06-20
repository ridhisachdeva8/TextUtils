
import "./App.css";
import Navbar from "./components/Navbar";
//import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter,Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //whether mode is dark or light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#022962";
      showAlert("Dark mode has been enabled", "success");
      //setInterval(() => {
      //  document.title = "Welcome to Textutils";
      //}, 2000);
      //setInterval(() => {
      //  document.title = "A text changing app";
      //}, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/*<Navbar title="Textutils"  aboutText= "About us"/>*/}
  
     {/* <BrowserRouter> */}
      <Navbar title="Textutils"  aboutText= "About " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}></Route> */}
          {/* <Route exact path="/" element={  */}
            <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse below"
          mode={mode}
        />
        {/* }> */}
        {/* </Route> */}
        {/* </Routes>  */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
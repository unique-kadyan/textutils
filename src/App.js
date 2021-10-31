
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import ContactUS from './components/ContactUS';


function App() {
  
  const [drkMode,setDrkMode] = useState('light');
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message,type) =>{
    setAlert({
      message: message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleMode = () =>{
    if(drkMode === 'light')
    {
      setDrkMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode is enabled","success");
    }
    else{
      setDrkMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is enabled","success");
    }
  }
  
  return (
   <>

  <Router>
  <NavBar Mode={drkMode} toogleMode={toogleMode}/>
  <Alert alert={alert} />
  <Switch>
    <Route exact path="/about">
      <About Mode={drkMode} />
    </Route>
    <Route  path="/">  <TextForm showAlert = {showAlert} Mode={drkMode}/></Route>
    <Route  path="/contactus"><ContactUS Mode={drkMode} /> </Route>
  </Switch>
  </Router>
   </>
  );
}

export default App;

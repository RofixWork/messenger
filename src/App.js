import React from "react";
import './styles/App.scss';
import Navbar from './components/Navbar'
import ContextProvider from "./Global/Context";
import Home from "./components/Home";
function App() {
  return (
    <ContextProvider>
      <Navbar/>
      <Home/>
    </ContextProvider>
  );
}

export default App;

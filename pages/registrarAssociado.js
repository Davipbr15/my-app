import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import AssociadoRegister from "../components/registrarAssociado.js";

import Link from "next/link";


//
function App() {

  return (
    <div className="App">

    <Header />

    <AssociadoRegister />

    </div>
  );
}

export default App;
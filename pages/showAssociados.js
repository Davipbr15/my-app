import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import ShowAssociate from "../components/ShowAssociate.js";
import Axios from 'axios';
import Link from "next/link";
//
function App() {

  const [associate, setAssociate ] = useState([]);
  useEffect(()=>{

      Axios.get("http://localhost:3005/api/searchAssociate")
      .then((response) => {
          setAssociate(response.data)
          console.log("Passou Daqui")
      })
      .catch(() => {
          console.log("Erro")
      })


  },[])

  return (

    <div className="App">
    
    <Header />

    <ShowAssociate />

    

    </div>
  );
}

export default App;
import Link from 'next/link';
import axios from "axios";
import React, { useEffect, useState } from 'react';

function ShowAssociate(){

    const [assc, setAssociate ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/api/searchAssociate")
        .then(response => {
            setAssociate(response.data);
        })

      },[]);

    return( 
           
        <div className="App flex">
            <h2>Testes</h2>
            {assc.map((ascData, index) => {
                return(
                <div key={index} className="wrap flex">
                    <p>A: {this.state.assc.dadosPessoais.cep}</p>
                </div>
                );
            })}



            {/* {asc.map((as, index) => {
                return(
                <div key={index}>
                <h1>
                    {as.dadosPessoais}
                </h1>
                </div>
            );
            })} */}
        </div>

    )

}

export default ShowAssociate;
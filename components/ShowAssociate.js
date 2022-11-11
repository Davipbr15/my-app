import Link from 'next/link';
import Axios from "axios";
import React, { useEffect, useState } from 'react';

function ShowAssociate(){
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [associate, setAssociate ] = useState([]);
    useEffect(()=>{

        Axios.get("http://192.168.1.7:3005/api/searchAssociate")
        .then((response) => {
            setAssociate(response.data)
            console.log("Passou Daqui")
        })
        .catch(() => {
            console.log("Erro")
        })


    },[])
    return( 
           
        <div className="flex">
        
            <h2>Teste</h2>
            

        </div>

    )

}

export default ShowAssociate;
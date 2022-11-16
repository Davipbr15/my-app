import Link from 'next/link';
import Axios from "axios";
import React, { useEffect, useState } from 'react';

function ShowAssociate(){
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [associate, setAssociate ] = useState([]);
    useEffect(()=>{

        const fetchdata = async() =>{
          const data = await Axios.get("http://localhost:3005/api/searchAssociate")
          setAssociate(data);
          console.log(data.data)
        };
    
        fetchdata();
    
    
      },[])
    return( 
           
        <div className="flex">
        
            <h2>Teste</h2>

            {
                associate && associate.data?.map((associate) =>{

                    <h1
                    >

                    </h1>

                    })
            }
            

        </div>

    )

}

export default ShowAssociate;
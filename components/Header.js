import React from "react";
import Link from 'next/link';

function Header(){
      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 
           
        <div className="flex">
        <Link href="/">
            <a
              href="/"
              className="font-medium text-gray-600 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Index
            </a>
        </Link>
        <Link href="/registrarAssociado">
            <a
              href="/"
              className="font-medium text-gray-600 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Registrar
            </a>
        </Link>
        <Link href="/showAssociados">
            <a
              href="/"
              className="font-medium text-gray-600 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Ver
            </a>
        </Link>

        </div>

    )

}

export default Header;
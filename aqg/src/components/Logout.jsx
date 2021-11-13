import React, {useEffect} from 'react'

import { useNavigate } from "react-router-dom";

export default function Logout() {
    let navigate = useNavigate();
    useEffect(() => {
        // Update the document title using the browser API
          localStorage.setItem("currEmail", 'null') 
          localStorage.setItem("currPassword", 'null')
          navigate("/login");
      });

    return (
        <div>
            "You are successfully Logged out/"
        </div>
    )
}

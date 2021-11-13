import React, {  useEffect } from "react";
import FormComp from "./FormComp";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  let emails = ["mistrysontu@gmail.com", 'abc@yahoo.com']
  localStorage.setItem("emails", emails);

  localStorage.setItem("passwords", ["12345678"]);
  localStorage.setItem("currEmail", 'null');
  localStorage.setItem("currPassword", 'null');
  // const [email, setEmail] = useState(["mistrysontu@gmail.com"]);
  // const [password, setPassword] = useState(["Password@AQG"]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log(localStorage.getItem("currEmail"))
    if (
      localStorage.getItem("currEmail") === 'null' ||
      localStorage.getItem("currPassword") === 'null'
    ) {
      navigate("/login");
    }
  });

  return (
    <div>
      <FormComp />
    </div>
  );
}

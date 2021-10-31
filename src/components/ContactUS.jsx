import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../App.css";
function ContactUS(props) {
    return (
        <div className="container center flex-auto" id="contact" mx-10 style= {{ backgroundColor : props.Mode === 'dark' ? 'grey' : 'white',     color:props.Mode === 'dark' ? 'white' : 'black',} } my-3>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h1 > < FaPhoneAlt />  {"   "}   +918168481271 </h1> <br></br><br></br>
          <h2><HiMail /> {"                                   "} rajeshsinghkadyan@gmail.com</h2>
        </div>
      )
    }
 
export default ContactUS

import React from "react";
import contact from "../images/contact.jpeg";
import "../style.css";
import ReCaptach from "./ReCaptach";
import { useState, useRef } from "react";

const Contact = () => {
  const [verified, setVerified] = useState(false);
// const [user,setUser]=useState({
//   name:"",number:"",email:"",department:"",date:"",time:"",message:""
// })
// let name, value;
// const handleInputs=(e)=>{
// console.log(e)
// name=e.target.name
// }
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        width: "1500px",
        marginTop: "10px",
        height: "60rem",
        backgroundSize: "cover",
        backgroundImage: `url("https://facty.mblycdn.com/uploads/fh/2018/12/921583810-1024x683.jpg")`,
      }}
    >
      <div name="Contact">
        <h1 style={{ color: "red", marginLeft: "190px", paddingTop: "70px" }}>
          Make An Appointment Today !
        </h1>
        <p style={{ color: "black", marginLeft: "150px" }}>
          Our clinic provides high level health services, offers comprehensive
          solutions for the treatment
        </p>
      </div>

      <form
        style={{ marginTop: "50px" }}
        action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
        method="POST"
        className="form"
      >
        <div>
          <div>
            <input
            
              required
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Your Name"
              style={{ marginTop: "20px", marginLeft: "240px" }}
            />
            <input
            
              required
              type="number"
              name="number"
              placeholder="Phone Number"
              style={{ marginTop: "20px", marginLeft: "20px" }}
            />
          </div>
          <div>
            <input
            
              required
              type="text"
              name="email"
              placeholder="Email"
              style={{ marginTop: "20px", marginLeft: "240px" }}
            />
            <input
           
              required
              type="text"
              name="department"
              placeholder="Department"
              style={{ marginTop: "20px", marginLeft: "20px" }}
            />
          </div>
          <div>
            <input
            
              required
              type="date"
              name="date"
              placeholder="Date"
              style={{ marginTop: "20px", marginLeft: "244px", width: "180px" }}
            />
            <input
            
              required
              type="time"
              name="time"
              placeholder="Time"
              style={{ width: "180px", marginTop: "20px", marginLeft: "20px" }}
            />
          </div>
          <textarea
          
              required
              name="message"
            placeholder="Message"
            rows="10"
            style={{
              marginTop: "20px",
              marginLeft: "240px",
              width: "380px",
              height: "100px",
            }}
          ></textarea>
        </div>
        <button
          disabled={!verified}
          style={{
            color: "red",
            borderRadius: "6rem",
            padding: "4px",
            fontSize: 15,
            backgroundColor: "red",
            color: "white",
            marginLeft: "457px",
            marginTop: "20px",
            width: "100px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* <div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="input" />
          <ReCaptach/> 
        </form>
      </div> */}
    </div>
  );
};

export default Contact;

//khushigarg21101
//O9mAo16r4II7330g
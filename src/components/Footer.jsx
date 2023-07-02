import React from "react";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "blue", color: "white", height: "400px" }}>
      <div style={{ paddingTop: "30px", display: "flex" }}>
        <div>
          <SlLocationPin
            size={50}
            style={{
              backgroundColor: "white",
              border: "6px solid white",
              borderRadius: "4rem",
              color: "blue",
              marginLeft: "250px",
              paddingTop: "8px",
              marginRight: "6px",
            }}
          />
          <span style={{ marginLeft: "47px", marginTop: "0px" }}>Address:</span>
          <p style={{ marginLeft: "350px", marginTop: "0px" }}>
            {" "}
            293 Bank St , Coatbridge , CA , USA
          </p>
          <AiOutlineMail
            size={50}
            style={{
              backgroundColor: "white",
              border: "6px solid white",
              borderRadius: "4rem",
              color: "blue",
              marginLeft: "250px",
              paddingTop: "8px",
              marginRight: "6px",
            }}
          />
          <span style={{ marginLeft: "47px", marginTop: "0px" }}>Email:</span>
          <p style={{ marginLeft: "350px", marginTop: "0px" }}>
            {" "}
            info@khushi.org
          </p>
          <BsTelephone
            size={50}
            style={{
              backgroundColor: "white",
              border: "6px solid white",
              borderRadius: "4rem",
              color: "blue",
              marginLeft: "250px",
              paddingTop: "8px",
              marginRight: "6px",
            }}
          />
          <span style={{ marginLeft: "47px", marginTop: "0px" }}>Phone:</span>
          <p style={{ marginLeft: "350px", marginTop: "0px" }}>
            {" "}
            (432) 435-5433
          </p>
          {/*  size={30} style={{backgroundColor:"white",border:"8px solid white", borderRadius:"2rem",color:"blue",marginLeft:"80px", marginBottom:"3px"}}/> <a style={{color:"#fff", textDecoration:"none"}} href="https://mail.google.com/mail/u/0/#inbox">Email:<div style={{marginLeft:"730px", marginTop:"0px"}}> info@khushi.org</div> </a> 
      <BsTelephone size={30} style={{backgroundColor:"white",border:"8px solid white", borderRadius:"2rem",color:"blue",marginLeft:"80px", marginRight:"16px", marginBottom:"3px", marginTop:"20px"}}/><a style={{color:"#fff", textDecoration:"none"}} href="#" >Phone:<div style={{marginLeft:"1030px", marginTop:"0px"}}> (432) 435-5433</div></a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

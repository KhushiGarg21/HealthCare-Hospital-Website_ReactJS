import React from "react";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import contact from "../images/contact.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { icons } from "react-icons";
const Whatwedo = () => {

  return (
    <div name="What We Do">
      <div
        style={{
          marginTop: "50px",          
          gridTemplateColumns: "35rem 15rem 0rem 8rem",
          gridGap: "12px",
          display: "grid",
          marginLeft: "200px",
          // marginRight: "150px",
        }}
      >
        {/* 1st */}
        <div
          style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
            height: "260px",
            width: "540px",
            backgroundPosition:'cover',
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${process.env.PUBLIC_URL + contact})`,
            padding: "20px",
            color: "red",
          }}
        >
          <div style={{ paddingLeft: "65px", fontWeight: 900 }}>
            Our Services
          </div>
          <p style={{ paddingLeft: "8px", width: "300px", color: "black" }}>
            4 hours emergency assistance call us
          </p>
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "2rem",
              color: "white",
              width: "180px",
              padding: "9px 15px",
              paddingLeft:"25px",
              marginLeft: "46px",
              cursor:"pointer",

            }}
          >
            <FaPhoneAlt />
            (432) 435-5433
          </div>
        </div>
        {/* 2nd */}
        <div style={{padding:"4px",width:"250px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"}}>
          <img style={{marginLeft:"80px", marginTop:"8px"}} src={one} alt="" />
          <div style={{ marginLeft:"50px",fontWeight: "90" }}>Primary Care & Internal </div>
          <div style={{ color: "grey" ,width:"230px",textAlign:"center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2rem",
              color: "grey",
              width: "grey",
              padding: "11px 15px",
              paddingLeft:"38px",
              marginTop:"30px",
              marginLeft: "50px",
              cursor:"pointer",
              border:"1px solid #C0C0C0"

            }}
          >Learn more</div>
        </div>
        .{/* 3rd */}
        <div style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)", width:"250px", marginLeft:"40px"}}>
          <img style={{marginLeft:"90px"}} src={three} alt="" />
          <div style={{ fontWeight: "90",textAlign:"center" }}>Skilled Nursing Services </div>
          <div style={{ color: "grey", width:"230px", marginLeft:"2px", textAlign:"center"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2rem",
              color: "grey",
              width: "150px",
              padding: "11px 15px",
              paddingLeft:"38px",
              marginTop:"32px",
              marginLeft: "55px",
              cursor:"pointer",
              border:"1px solid #C0C0C0"

            }}
          >Learn more</div>
        </div>
        </div>
        <div
        style={{
          marginTop: "50px",          
          // gridTemplateColumns: "20rem 20rem 20rem 20rem",
          gridGap: "2.3rem",
          // display: "grid",
          display:"flex",
          marginLeft: "200px",
          // width:"80px",
          // marginRight: "20px",
        }}
      >
        {/* 4th */}
        <div style={{width:"250px", marginLeft:"0px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"}}>
          <img style={{marginLeft:"90px", textAlign:"center"}} src={four} alt="" />
          <div style={{ fontWeight: "90", textAlign:"center"}}>Geriatric & Dementia Clinic </div>
          <div style={{ color: "grey", width:"250px",textAlign:"center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2rem",
              color: "grey",
              width: "150px",
              padding: "11px 15px",
              paddingLeft:"38px",
              marginTop:"30px",
              marginLeft: "50px",
              cursor:"pointer",
              border:"1px solid #C0C0C0"

            }}
          >Learn more</div>
        </div>
        
        
        {/* 5th */}
        <div style={{width:"250px", marginLeft:"0px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"}}>
          <img style={{marginLeft:"40px"}} src={five} alt="" />
          <div style={{ fontWeight: "90",textAlign:"center" }}>Botox & Asthetics </div>
          <div style={{ color: "grey",width:"250px",textAlign:"center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "2rem",
              color: "white",
              width: "150px",
              padding: "11px 15px",
              paddingLeft:"38px",
              marginTop:"30px",
              marginLeft: "50px",
              cursor:"pointer",
              // border:"1px solid #C0C0C0"
            }}
          >Learn more</div>
        </div>
        {/* 6th */}
        <div style={{width:"250px", marginLeft:"0px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"}}>
          <img style={{marginLeft:"80px"}} src={six} alt="" />
          <div style={{ fontWeight: "90", textAlign:"center" }}>Home Visit Services </div>
          <div style={{ color: "grey" ,width:"250px",textAlign:"center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2rem",
              color: "grey",
              width: "150px",
              padding: "11px 15px",
              paddingLeft:"38px",
              marginTop:"35px", 
              marginLeft: "50px",
              cursor:"pointer",
              border:"1px solid #C0C0C0"

            }}
          >Learn more</div>
        </div>
        {/* 7th */}
        <div style={{width:"250px", marginLeft:"14px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"}}>
          <img style={{marginLeft:"80px"}}  src={two} alt="" />
          <div style={{ fontWeight: "90",textAlign:"center" }}>Pain & Spine Care </div>
          <div style={{ color: "grey" ,textAlign:"center"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2rem",
              color: "grey",
              width: "150px",
              padding: "11px 15px",
              paddingLeft:"38px",
              marginTop:"30px",
              marginLeft: "50px",
              cursor:"pointer",
              border:"1px solid #C0C0C0"

            }}
          >Learn more</div>
        </div>
      </div>
      </div>
  );
};

export default Whatwedo;

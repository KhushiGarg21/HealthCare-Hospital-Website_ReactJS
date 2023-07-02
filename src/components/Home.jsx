import React from "react";
import HeroImage from "../images/bg1.jpeg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Button, Link } from "react-scroll";
import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs';
import link from "./Contact";

const Home = () => {
  return (
    <div 
      name="home" style={{objectFit:"cover",backgroundRepeat:"no-repeat",width:"1523px",marginTop:"10px",height:"550px",position:"center",
      backgroundSize: 'cover', backgroundImage: `url("https://th.bing.com/th/id/OIP.KKTTHh4EBDD97y3-S-GyOQHaE7?pid=ImgDet&rs=1")`}}>
      <div>
        <div >
          <h1 style={{marginLeft:"90px",paddingTop:"50px", color:"#64bdbd",fontWeight:"900", size:"40px"}}>
            Not just better healthcare,<br/> but a better healthcare experience
          </h1>
          <BsArrowLeftCircle style={{marginLeft:"10px", blockSize:"60px", color:"grey", marginTop:"2px"}}/>
          <div > <BsArrowRightCircle style={{marginLeft:"1400px",blockSize:"60px", color:"grey"}}/></div>
          <button style={{marginLeft:"100px",marginRight:"8px", backgroundColor:"red",color:"white",cursor:"pointer", padding:"5px 8px",marginTop:"0px", borderRadius:"2rem", border:"0.1px solid red"}}> <Link to={"Contact"} smooth duration={500}>Book An Appointment</Link> </button>
          <button style={{borderRadius:"2rem",padding:"5px 8px", marginBottom:"120px", backgroundColor:"white", border:"0.1px solid white"}}>Learn More </button>
          <div>
            <Link
              to="appointment"
              smooth
              duration={500}
              className=""
            >
            </Link>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

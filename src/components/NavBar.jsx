import React, { useState } from "react";
import { FaBars, FaTimes, FaPinterestSquare,FaNotesMedical, FaLinkedin,FaInstagram, FaPhoneAlt, FaGithubSquare} from "react-icons/fa";
import { SlLocationPin} from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../images/mainlogo.png";
import "../style.css";
import "./Whatwedo";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      // link: "about",
      link: "Who We Are",
    },
    {
      id: 2,
      link: "What We Do",
    },
    {
      id: 3,
      link: "Our Management",
    },
    {
      id: 4,
      link: "Contact",
    },
    {
      id: 5,
      link: "Covid-19-Safety",
    },
  ];

  return (
    <>
    <div className="header_menu">
      <div className="upper">
        <SlLocationPin style={{color:"#fff", marginLeft:"250px", marginRight:"4px" }}/> 293 Bank St  ,   Coatbridge   ,   CA    , USA  <AiOutlineMail style={{marginLeft:"4px", marginBottom:"3px"}}/> <a style={{color:"#fff", textDecoration:"none"}} href="https://mail.google.com/mail/u/0/#inbox"> info@khushi.org </a> <FaPhoneAlt style={{marginLeft:"4px", marginRight:"4px", marginBottom:"3px"}}/><a style={{color:"#fff", textDecoration:"none"}} href="#" >(432) 435-5433</a>
      
        <FaLinkedin style={{cursor:"pointer", marginLeft:"420px"}}><a href="https://www.linkedin.com/in/khushi-garg-b31217201/" style={{marginRight:"0px"}}/></FaLinkedin>
        <FaInstagram style={{cursor:"pointer",color:"white", marginLeft:"20px", border:"white"}}><a href="https://www.instagram.com/khushi_garg_2110/"/></FaInstagram>
        <FaPinterestSquare style={{cursor:"pointer", marginLeft:"20px"}}><a href="https://www.linkedin.com/in/khushi-garg-b31217201/"/></FaPinterestSquare>
        <FaGithubSquare style={{cursor:"pointer", marginLeft:"20px" }}><a href="https://github.com/KhushiGarg21" style={{paddingRight:"0px"}}/></FaGithubSquare>
      </div>

    {/* below navbar */}
      <div className="navbar">
        <img src={logo} />
        
        <ul className="list">
          {links.map(({ id, link }) => (
            <li key={id} style={{ padding: "2rem", cursor:"pointer" }}>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="tag1">Pay Invoice</div>
        <div id="tag2"><Link to={"Contact"} smooth duration={500}><FaNotesMedical size={26} style={{paddingTop:"1px", paddingRight:"3px"}}/>Appointment</Link></div>
      </div>
      <div
        onClick={() => setNav(!nav)}
        style={{ cursor: "pointer", display: "none" }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "cover",
            height: "screen",
            cursor:"pointer", 
          }}
        >
          {links.map(({ id, link }) => (
            <li key={id} style={{ cursor: "pointer" }}>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    <a href="#" id="iconbar" onclick="responsive_menu()"><FaBars/></a>
  </>);
};

export default NavBar;

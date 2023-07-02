import React from "react";
import "../style.css";
import plus from "../images/plus.png";
import img from "../images/aboutpic.png";
import video from "../images/video.mp4";
import { Button, Link } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import one from "../images/7.png";
import two from "../images/8.png";
import three from "../images/9.png";
import four from "../images/10.png";
import five from "../images/11.png";
import six from "../images/12.png";
import seven from "../images/13.png";
import eight from "../images/14.png";
import nine from "../images/15.png";
import ten from "../images/bg2.jpeg";
import eleven from "../images/bg3.jpeg";
import twelve from "../images/16.png";

const About = () => {
  const management = [
    {
      id: 1,
      src: seven,
      text: "Zain llahi",
      text2: "MD President",
      des: "Clinic & Skilled Nursing Facility MD",
    },
    {
      id: 2,
      src: eight,
      text: "Mr Cortin",
      text2: "MD Vice President",
      des: "Clinic & Skilled Nursing Facility MD",
    },
    {
      id: 3,
      src: nine,
      text: "Katherine vila",
      text2: "MD Vice President",
      des: "Clinic & Skilled Nursing Facility MD",
    },
  ];

  return (
    <div name="Who We Are">
      <div style={{ margin: "120px", marginTop: "90px",marginBottom:"90px", display: "flex" }}>
        <img style={{ width: "400px", height: "300px" }} src={img} />
        <div style={{ margin: "20px" }}>
          <h1 style={{ color: "red" }}>About Us</h1>

          <p style={{ marginRight: "100px", color: "grey" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
            remaining essentially unchanged.
          </p>
          <a
            style={{
              border: "2px solid grey",
              borderRadius: "2rem",
              color: "grey",
              textDecoration: "none",
              padding: "6px 20px ",
            }}
            href="#"
          >
            Read More
          </a>
        </div>
      </div>

      {/* values */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "red" }}>Our values</h1>
        <p> We Have Best And Responsible Departments</p>
      </div>

      <div style={{ marginLeft: "200px" }}>
        <img src={one} />
        <img src={two} />
        <img src={three} />
      </div>
      <div style={{ marginLeft: "200px" }}>
        <img src={four} />
        <img src={five} />
        <img src={six} />
      </div>

      {/* our introduction */}

      <div style={{ display: "flex" }}>
        <div
          style={{ marginLeft: "200px", marginTop: "120px", width: "450px",objectFit:"cover",backgroundRepeat:"no-repeat",
           backgroundImage: `url(${process.env.PUBLIC_URL + plus})`, opacity:"0.4", backgroundPosition:"65% 8px", backgroundSize:230}}
        >
          <h1 style={{ color: "red" }}>Our Introduction</h1>
          <h3 style={{ color: "black" }}>Lorem Ipsum is simply dummy text</h3>
          <p style={{ color: "grey", width: "480px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            It has survived not only five centuries, but also the leap into
            electronic typesetting. remaining essentially unchanged.
          </p>
          <div
            style={{
              marginLeft: "29px",
              cursor: "pointer",
            }}
          >
            <FaPhoneAlt style={{ marginTop: "0px", marginRight: "4px" }} />
            (432) 435-5433
            <button
              style={{
                marginLeft: "20px",
                marginRight: "2px",
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
                padding: "5px 8px",
                marginTop: "0px",
                borderRadius: "2rem",
                border: "0.1px solid white",
              }}
            >
              <Link to={"Contact"} smooth duration={500}>
                Book An Appointment
              </Link>{" "}
            </button>
          </div>
        </div>
        <div>
          <video
            style={{
              marginBottom: "70px",
              marginTop: "50px",
              width: "540px",
              height: "400px",
              marginLeft: "100px",
            }}
            controls
            type="video/mp4"
            src={video}
          />
        </div>
      </div>
      {/* management */}
      <div
        style={{
          backgroundColor: "white",
          width: "1490px",
          marginTop: "20px",
          height: "700px",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundColor: "#ADD8E6",
          // backgroundImage: `url(${process.env.PUBLIC_URL + eleven})`,
        }}
      >
        <div name="Our Management" style={{ textAlign: "center" }}>
          <h1 style={{ color: "red", paddingTop: "20px" }}>Our Management</h1>
        </div>

        <div
          style={{ display: "flex", marginLeft: "160px", marginTop: "80px" }}
        >
          {management.map(({ id, src, text, text2, des }) => (
            <div key={id}>
              <img src={src} alt="" style={{ border: "8px solid white" }} />
              <div
                style={{
                  paddingLeft: "160px",
                  fontWeight: "900",
                  color: "black",
                  backgroundColor: "white",
                  width: "370px",
                  marginRight: "20px",
                  marginTop: "0px",
                }}
              >
                {text}
              </div>
              <div
                style={{
                  paddingLeft: "150px",
                  color: "black",
                  backgroundColor: "white",
                  marginRight: "20px",
                }}
              >
                {text2}
              </div>
              <div
                style={{
                  paddingLeft: "70px",
                  color: "black",
                  backgroundColor: "white",
                  marginRight: "20px",
                }}
              >
                {des}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            border: "2px solid grey",
            color: "grey",
            borderRadius: "8rem",
            padding: "6px",
            marginTop: "40px",
            paddingLeft: "40px",
            width: "150px",
            marginLeft: "670px",
            cursor: "pointer",
          }}
        >
          Show All
        </div>
      </div>
      {/* what patients say */}
      <div>
        <h1 style={{ color: "red", paddingTop: "20px", textAlign: "center" }}>
          What Patients Say About Us
        </h1>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "100px", textAlign: "center" }}>
            <img src={twelve} />
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of usinf Lorem I sum is that ithas more-or-less distribution
              of letters, as opposed to using 'COntent here, content here,'
              making it look like readable English.
            </p>
            <h2 style={{ textAlign: "center" }}>"Lori Chavoya"</h2>
          </div>

          <div style={{ margin: "100px", textAlign: "center" }}>
            <img src={twelve} />
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of usinf Lorem I sum is that ithas more-or-less distribution
              of letters, as opposed to using 'COntent here, content here,'
              making it look like readable English.
            </p>
            <h2>"John Moreland"</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
// `opacity-0 hover:opacity-100 absolute inset-0 z-20 flex justify-center rounded-lg flex-wrap
//  text-1xl text-white font-bold align-items-center bg-black border-2 ${textstyle}`}

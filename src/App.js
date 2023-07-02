import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Whatwedo from "./components/Whatwedo";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Whatwedo/>
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import Recaptcha from 'react-recaptcha';
// import './App.css';
// import logo from "./images/recap.png"

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.handleSubscribe = this.handleSubscribe.bind(this);
//     this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
//     this.verifyCallback = this.verifyCallback.bind(this);

//     this.state = {
//       isVerified: false
//     }
//   }

//   recaptchaLoaded() {
//     console.log('capcha successfully loaded');
//   }

//   handleSubscribe() {
//     if (this.state.isVerified) {
//       alert('You have successfully subscribed!');
//     } else {
//       alert('Please verify that you are a human!');
//     }
//   }

//   verifyCallback(response) {
//     if (response) {
//       this.setState({
//         isVerified: true
//       })
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">React Recaptcha Demo - PentaCode</h1>
//         </header>
//         <div className="App-intro">
//           <input type="text" placeholder="email@company.com" />

//           <div
//             className="convert"
//             onClick={this.handleSubscribe}
//           >Subscribe</div>

//           <Recaptcha
//             sitekey="6LdsDewlAAAAAOynmDKcLoKg71wmQqwE9xJYbGke"
//             render="explicit"
//             onloadCallback={this.recaptchaLoaded}
//             verifyCallback={this.verifyCallback}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
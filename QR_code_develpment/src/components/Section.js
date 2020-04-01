import React from "react";
import "../styles/Section.css";
// var QRCode = require('react-qr');
// import QRCode from "react-qr";
import QRCode from "qrcode.react";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

class Section extends React.Component {
  state = {
isQrCode: false,
qrValue: ""

  };


  generateQr = () => {
     this.setState({isQrCode: true, qrValue: "youtube.com"})
  }
  render() {
    return (
      <section style={styles.sectionStyles} className="section">
        <p>Click me to generate QR Code!</p>
        {/* <QRCode text='1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v'/> */}

        {
          this.state.isQrCode ? 
          <QRCode value={this.state.qrValue} />:
          <></>
        }
        
        <div id="response"></div>
        <button onClick={this.generateQr} id="start">Generate</button>
      </section>
    );
  }
}

export default Section;

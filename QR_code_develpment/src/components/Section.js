import React from "react";
import "../styles/Section.css";
import QRCode from "qrcode.react";

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

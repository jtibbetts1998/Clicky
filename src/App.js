import React, { Component } from 'react';
import background from './components/images/Background1.jpg';
import Card from './components/card/card.js';
import Wrapper from './components/wrapper/index.js';
import Characters from './characters.json';
//import Logo from './logo.svg';
import './App.css';

var aCStyle = {
  fontSize: "25px",
  fontStyle: "italic",
  margin: "10px 10px 10px 10px",
  bottom: "4"
}

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url(" + background + ")",
  backgroundRepeat: "no-repeat",
  color: "white",
  textShadow: "2px 2px #006400"
};

var fontStyle = {
  fontSize: "25px",
  fontStyle: "italic"
}

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color
    }}
  />
);


class App extends Component {
  constructor() {
    super();

    this.state = {
      wins: 0,
      loss: 0,
      amountClicked: 0
    }

    this.addTotal = this.addTotal.bind(this);
  }

  addTotal() {
    var { amountClicked } = this.state;
    this.setState({ amountClicked: amountClicked + 1 })
    console.log(amountClicked)
  }

  render() {
    console.log("rendering");

    return (
      <React.Fragment>
        <Wrapper>
          <section style={sectionStyle}>
            <center><h1>Breaking Bad Click Game</h1></center>
            <center><h6 style={fontStyle}>"I am the Danger"</h6></center>
            <div className="container">
              <ColoredLine color="white"></ColoredLine>
            </div>
            <center style={fontStyle}><h6>Wins: {this.state.wins}</h6><h6>Loss: {this.state.loss}</h6></center>
            <h6 style={aCStyle}>Amount Clicked: {this.state.amountClicked} out of 12</h6>
            <div className="container">
              <ul>
                <Card Characters={Characters} yawn = {this.addTotal}/>
              </ul>
            </div>

          </section>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;

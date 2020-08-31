import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from "./components/app";

/*
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27
    };
    // this.nextYear = this.nextYear.bind(this);
    //2 sposob со3дать ф. в конструкторе: this.nextYear = () => {};
    //3 sposob declare using arrow func
  }

//   nextYear() {
//     console.log(1);
//     this.setState(state => {
//       years: ++state.years
//     });
//   }

  nextYear = () => {
    console.log(1);
    this.setState(state => ({
      years: ++state.years
    }));
  };

  render () {
    const { name, link } = this.props;
    const { years } = this.state;
    return (
        <>
          <h1>My name is { name } My age: { years } {this.state.neww}</h1>
          <button onClick={ this.nextYear }>++</button>
          <a href={ link }>My profile</a>
        </>
    )
  }
}

const All = () => {
  return (
      <>
        <WhoAmI name="Vasya" link="vk.com"/>
        <WhoAmI name="Petya" link="vk.com"/>
        <WhoAmI name="Kolya" link="vk.com"/>
      </>
  )
}

*/

ReactDOM.render(<App/>, document.getElementById('root'));

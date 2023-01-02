import React, { Component } from "react";
import ClassProps from "./classProps";
import FuncProps from "./funcProps";

class ForProps extends Component {
  state = {};
  render() {
    return (
      <div>
        <ClassProps name="Aiswarya" place="Kunduparamba">Child Component</ClassProps>
        <ClassProps name="Aswin" place="Vellimadukunnu"/>
        <ClassProps name="Manu" place="Bangalore"/>
        <ClassProps name="Kailas" place="Chevarambalam"/>

        <FuncProps name="Sajitha" place="Kunduparamba"/>
        <FuncProps name="Babu" place="Bangalore"/>
        <FuncProps name="Sijina" place="Chevarambalam"/>
      </div>
    );
  }
}

export default ForProps;

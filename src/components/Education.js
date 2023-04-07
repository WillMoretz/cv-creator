/* eslint-disable no-useless-constructor */
import { Component } from "react";
import EducationItem from "./EducationItem";

export default class Education extends Component {
  render() {
    return (
      <div>
        <EducationItem />
        <button>Add</button>
      </div>
    );
  }
}

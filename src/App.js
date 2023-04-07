/* eslint-disable no-useless-constructor */
import { Component } from "react";
import Education from "./components/Education";
import JobHistory from "./components/JobHistory";
import PersonalInfo from "./components/PersonalInfo";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Cover Letter Creator</header>
        <PersonalInfo />
        <JobHistory />
        <Education />
        <footer>Made by Will Moretz</footer>
      </div>
    );
  }
}

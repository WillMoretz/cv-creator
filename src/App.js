/* eslint-disable no-useless-constructor */
import { Component } from "react";
import CoverLetter from "./components/CoverLetter";
import Education from "./components/Education";
import JobHistory from "./components/JobHistory";
import PersonalInfo from "./components/PersonalInfo";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: "",
        title: "",
        email: "",
        phone: "",
        description: "",
      },
    };
  }

  reset() {
    this.setState((prevState) => ({
      personalInfo: {
        name: "",
        title: "",
        email: "",
        phone: "",
        description: "",
      },
    }));
  }

  updatePersonalInfo(property, e) {
    if (property === "name") {
      const newPersonalInfo = { ...this.state.personalInfo };
      newPersonalInfo.name = e.target.value;
      this.setState({ personalInfo: newPersonalInfo });
      return;
    }
    if (property === "title") {
      const newPersonalInfo = { ...this.state.personalInfo };
      newPersonalInfo.title = e.target.value;
      this.setState({ personalInfo: newPersonalInfo });
      return;
    }
    if (property === "email") {
      const newPersonalInfo = { ...this.state.personalInfo };
      newPersonalInfo.email = e.target.value;
      this.setState({ personalInfo: newPersonalInfo });
      return;
    }
    if (property === "phone") {
      const newPersonalInfo = { ...this.state.personalInfo };
      newPersonalInfo.phone = e.target.value;
      this.setState({ personalInfo: newPersonalInfo });
      return;
    }
    if (property === "description") {
      const newPersonalInfo = { ...this.state.personalInfo };
      newPersonalInfo.description = e.target.value;
      this.setState({ personalInfo: newPersonalInfo });
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <header>Cover Letter Creator</header>
        <PersonalInfo
          values={this.state.personalInfo}
          update={this.updatePersonalInfo.bind(this)}
        />
        <JobHistory />
        <Education />
        <div className="buttons">
          <button onClick={() => this.reset()}>Reset</button>
        </div>
        <CoverLetter />
        <footer>Made by Will Moretz</footer>
      </div>
    );
  }
}

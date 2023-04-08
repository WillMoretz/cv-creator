/* eslint-disable no-useless-constructor */
import { v4 as uuid } from "uuid";
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
      educationItems: [],
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
      educationItems: [],
    }));
  }

  addEducationItem() {
    const newEducationItems = this.state.educationItems;
    newEducationItems.push({ key: uuid() });
    this.setState({
      educationItems: newEducationItems,
    });
  }

  deleteEducationItem(key) {
    let newEducationItems = this.state.educationItems;
    newEducationItems = newEducationItems.filter((item) => item.key !== key);
    this.setState({
      educationItems: newEducationItems,
    });
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
        <Education
          values={this.state.educationItems}
          add={this.addEducationItem.bind(this)}
          delete={this.deleteEducationItem.bind(this)}
        />
        <div className="buttons">
          <button onClick={() => this.reset()}>Reset</button>
        </div>
        <CoverLetter />
        <footer>Made by Will Moretz</footer>
      </div>
    );
  }
}

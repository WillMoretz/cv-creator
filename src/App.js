/* eslint-disable no-useless-constructor */
import { v4 as uuid } from "uuid";
import { Component } from "react";
import CV from "./components/CV";
import Education from "./components/Education";
import JobHistory from "./components/JobHistory";
import PersonalInfo from "./components/PersonalInfo";
import "./index.css";

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
      jobHistoryItems: [],
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
      jobHistoryItems: [],
    }));
  }

  loadExample() {
    this.setState({
      personalInfo: {
        name: "John Doe",
        title: "Web Developer",
        email: "fakeEmail@email.com",
        phone: "000-000-0000",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum doloribus inventore sequi cupiditate alias tempora qui molestiae atque, assumenda labore!",
      },
      educationItems: [
        {
          key: uuid(),
          name: "some university",
          subject: "computer science",
          degree: "bachelors",
          start: "aug 10, 2007",
          end: "may 10 2011",
        },
        {
          key: uuid(),
          name: "some university",
          subject: "math",
          degree: "certificate",
          start: "aug 10, 2007",
          end: "may 10 2011",
        },
      ],
      jobHistoryItems: [
        {
          key: uuid(),
          position: "intern",
          company: "fake company 1",
          start: "Aug 10, 2012",
          end: "Aug 10, 2013",
        },
        {
          key: uuid(),
          position: "junior web developer",
          company: "fake company 2",
          start: "Jan 15, 2013",
          end: "Dec 10, 2016",
        },
      ],
    });
  }

  addJobHistoryItem() {
    const newJobHistoryItems = this.state.jobHistoryItems;
    newJobHistoryItems.push({
      key: uuid(),
      position: "",
      company: "",
      start: "",
      end: "",
    });
    this.setState({
      jobHistoryItems: newJobHistoryItems,
    });
  }

  updateJobHistoryItem(key, property, e) {
    const jobHistoryItemsCopy = this.state.jobHistoryItems;
    const index = jobHistoryItemsCopy.findIndex((item) => item.key === key);
    if (property === "position") {
      jobHistoryItemsCopy[index].position = e.target.value;
      this.setState({ jobHistoryItems: jobHistoryItemsCopy });
    }
    if (property === "company") {
      jobHistoryItemsCopy[index].company = e.target.value;
      this.setState({ jobHistoryItems: jobHistoryItemsCopy });
    }
    if (property === "start") {
      jobHistoryItemsCopy[index].start = e.target.value;
      this.setState({ jobHistoryItems: jobHistoryItemsCopy });
    }
    if (property === "end") {
      jobHistoryItemsCopy[index].end = e.target.value;
      this.setState({ jobHistoryItems: jobHistoryItemsCopy });
    }
  }

  deleteJobHistoryItem(key) {
    let newJobHistoryItems = this.state.jobHistoryItems;
    newJobHistoryItems = newJobHistoryItems.filter((item) => item.key !== key);
    this.setState({
      jobHistoryItems: newJobHistoryItems,
    });
  }

  addEducationItem() {
    const newEducationItems = this.state.educationItems;
    newEducationItems.push({
      key: uuid(),
      name: "",
      subject: "",
      degree: "",
      start: "",
      end: "",
    });
    this.setState({
      educationItems: newEducationItems,
    });
  }

  updateEducationItem(key, property, e) {
    const educationItemsCopy = this.state.educationItems;
    const index = educationItemsCopy.findIndex((item) => item.key === key);
    if (property === "name") {
      educationItemsCopy[index].name = e.target.value;
      this.setState({ educationItems: educationItemsCopy });
    }
    if (property === "subject") {
      educationItemsCopy[index].subject = e.target.value;
      this.setState({ educationItems: educationItemsCopy });
    }
    if (property === "degree") {
      educationItemsCopy[index].degree = e.target.value;
      this.setState({ educationItems: educationItemsCopy });
    }
    if (property === "start") {
      educationItemsCopy[index].start = e.target.value;
      this.setState({ educationItems: educationItemsCopy });
    }
    if (property === "end") {
      educationItemsCopy[index].end = e.target.value;
      this.setState({ educationItems: educationItemsCopy });
    }
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
        <header>CV Creator</header>
        <section>
          <div className="forms">
            <PersonalInfo
              values={this.state.personalInfo}
              update={this.updatePersonalInfo.bind(this)}
            />
            <JobHistory
              values={this.state.jobHistoryItems}
              add={this.addJobHistoryItem.bind(this)}
              delete={this.deleteJobHistoryItem.bind(this)}
              update={this.updateJobHistoryItem.bind(this)}
            />
            <Education
              values={this.state.educationItems}
              add={this.addEducationItem.bind(this)}
              delete={this.deleteEducationItem.bind(this)}
              update={this.updateEducationItem.bind(this)}
            />
          </div>
          <CV values={this.state} />
          <div className="buttons form-row">
            <button className="reset-button" onClick={() => this.reset()}>
              Reset
            </button>
            <button
              onClick={() => {
                this.loadExample();
              }}
            >
              Load Example
            </button>
          </div>
        </section>
        <footer>Made by Will Moretz</footer>
      </div>
    );
  }
}

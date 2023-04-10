import { Component } from "react";
import { v4 as uuid } from "uuid";

export default class CoverLetter extends Component {
  render() {
    const { personalInfo, educationItems, jobHistoryItems } = this.props.values;

    const jobHistoryElements = jobHistoryItems.map((item) => (
      <div className="job-history-item" key={uuid()}>
        <div className="position">{item.position}</div>
        <div className="company">{item.company}</div>
        <div className="start">{item.start}</div>
        <div className="end">{item.end}</div>
      </div>
    ));

    const educationElements = educationItems.map((item) => (
      <div className="education-item" key={uuid}>
        <div className="name">{item.name}</div>
        <div className="subject">{item.subject}</div>
        <div className="degree">{item.degree}</div>
        <div className="start">{item.start}</div>
        <div className="end">{item.end}</div>
      </div>
    ));

    return (
      <div className="cover-letter">
        <div className="personal-info">
          <div className="name">{personalInfo.name}</div>
          <div className="title">{personalInfo.title}</div>
          <div className="email">{personalInfo.email}</div>
          <div className="phone">{personalInfo.phone}</div>
          <div className="description">{personalInfo.description}</div>
        </div>
        <div className="job-history">
          <div>Job History</div>
          <div className="job-history-elements">{jobHistoryElements}</div>
        </div>
        <div className="education">
          <div>Education</div>
          <div className="education-elements">{educationElements}</div>
        </div>
      </div>
    );
  }
}

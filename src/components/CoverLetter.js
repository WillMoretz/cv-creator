import { Component } from "react";

export default class CoverLetter extends Component {
  render() {
    const { personalInfo, educationItems, jobHistoryItems } = this.props.values;

    const jobHistoryElements = jobHistoryItems.map((item) => (
      <div className="job-history-item">
        <div className="position">{item.position}</div>
        <div className="company">{item.company}</div>
        <div className="start">{item.start}</div>
        <div className="end">{item.end}</div>
      </div>
    ));

    const educationElements = educationItems.map((item) => (
      <div className="education-item">
        <div className="name">{item.name}</div>
        <div className="subject">{item.subject}</div>
        <div className="degree">{item.degree}</div>
        <div className="start">{item.start}</div>
        <div className="end">{item.end}</div>
      </div>
    ));

    return (
      <div>
        <div className="personal-info">
          <div className="name">{personalInfo.name}</div>
          <div className="title">{personalInfo.title}</div>
          <div className="email">{personalInfo.email}</div>
          <div className="phone">{personalInfo.phone}</div>
          <div className="description">{personalInfo.description}</div>
        </div>
        <div className="job-history-elements">{jobHistoryElements}</div>
        <div className="education-elements">{educationElements}</div>
      </div>
    );
  }
}

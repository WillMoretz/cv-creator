import { Component } from "react";
import { v4 as uuid } from "uuid";

export default class CoverLetter extends Component {
  render() {
    const { personalInfo, educationItems, jobHistoryItems } = this.props.values;

    const jobHistoryElements = jobHistoryItems.map((item) => (
      <div className="job-history-item history-item" key={`${uuid()}diff`}>
        <div className="dates">
          <div className="start-end">
            {item.start} - {item.end}
          </div>
        </div>
        <div className="main-item">
          <div className="position">{item.position}</div>
          <div className="company">{item.company}</div>
        </div>
      </div>
    ));

    const educationElements = educationItems.map((item) => (
      <div className="education-item history-item" key={`${uuid()}diff`}>
        <div className="dates">
          <div className="start-end">
            {item.start} - {item.end}
          </div>
        </div>
        <div className="main-item">
          <div className="name">{item.name}</div>
          <div className="subject">{item.subject}</div>
          <div className="degree">{item.degree}</div>
        </div>
      </div>
    ));

    return (
      <div className="cover-letter">
        <div className="personal-name">
          <div className="name">{personalInfo.name}</div>
          <div className="title">{personalInfo.title}</div>
        </div>
        <div className="personal-info">
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

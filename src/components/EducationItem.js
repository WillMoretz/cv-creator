/* eslint-disable no-useless-constructor */
import { Component } from "react";

export default class EducationItem extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <label htmlFor="school-name">School Name: </label>
          <input type="text" name="school-name" id="school-name" />
        </div>
        <div className="form-row">
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="form-row">
          <label htmlFor="degree">Degree: </label>
          <input type="text" name="degree" id="degree" />
        </div>
        <div className="form-row">
          <label htmlFor="education-start-date">Start: </label>
          <input
            type="text"
            name="education-start-date"
            id="education-start-date"
          />
        </div>
        <div className="form-row">
          <label htmlFor="education-end-date">End: </label>
          <input
            type="text"
            name="education-end-date"
            id="education-end-date"
          />
        </div>
        <button type="button">Delete</button>
      </form>
    );
  }
}

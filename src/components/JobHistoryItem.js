import { Component } from "react";

export default class JobHistoryItem extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <label htmlFor="position">Position: </label>
          <input type="text" name="position" id="position" />
        </div>
        <div className="form-row">
          <label htmlFor="company">Company: </label>
          <input type="text" name="company" id="company" />
        </div>
        <div className="form-row">
          <label htmlFor="job-start-date">Start: </label>
          <input type="text" name="job-start-date" id="job-start-date" />
        </div>
        <div className="form-row">
          <label htmlFor="job-end-date">End: </label>
          <input type="text" name="job-end-date" id="job-end-date" />
        </div>
        <button type="button">Delete</button>
      </form>
    );
  }
}

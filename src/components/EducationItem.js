/* eslint-disable no-useless-constructor */
import { Component } from "react";

export default class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete(key) {
    this.props.delete(key);
  }

  handleUpdate(key, property, e) {
    this.props.update(key, property, e);
  }

  render() {
    return (
      <form>
        <div className="form-row">
          <label htmlFor="school-name">School Name: </label>
          <input
            type="text"
            name="school-name"
            id="school-name"
            value={this.props.name}
            onChange={(e) => this.handleUpdate(this.props.keyProp, "name", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="subject">Subject: </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={this.props.subject}
            onChange={(e) =>
              this.handleUpdate(this.props.keyProp, "subject", e)
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="degree">Degree: </label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={this.props.degree}
            onChange={(e) => this.handleUpdate(this.props.keyProp, "degree", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="education-start-date">Start: </label>
          <input
            type="text"
            name="education-start-date"
            id="education-start-date"
            value={this.props.start}
            onChange={(e) => this.handleUpdate(this.props.keyProp, "start", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="education-end-date">End: </label>
          <input
            type="text"
            name="education-end-date"
            id="education-end-date"
            value={this.props.end}
            onChange={(e) => this.handleUpdate(this.props.keyProp, "end", e)}
          />
        </div>
        <button
          type="button"
          onClick={() => this.handleDelete(this.props.keyProp)}
        >
          Delete
        </button>
      </form>
    );
  }
}

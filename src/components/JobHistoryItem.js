/* eslint-disable no-useless-constructor */
import { Component } from "react";

export default class JobHistoryItem extends Component {
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
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            id="position"
            value={this.props.position}
            onChange={(e) =>
              this.handleUpdate(this.props.keyProp, "position", e)
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            id="company"
            value={this.props.company}
            onChange={(e) =>
              this.handleUpdate(this.props.keyProp, "company", e)
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="job-start-date">Start: </label>
          <input
            type="text"
            name="job-start-date"
            id="job-start-date"
            value={this.props.start}
            onChange={(e) => this.handleUpdate(this.props.keyProp, "start", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="job-end-date">End: </label>
          <input
            type="text"
            name="job-end-date"
            id="job-end-date"
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

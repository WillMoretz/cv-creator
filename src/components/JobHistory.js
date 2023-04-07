import { Component } from "react";
import JobHistoryItem from "./JobHistoryItem";

export default class JobHistory extends Component {
  render() {
    return (
      <div>
        <JobHistoryItem />
        <button>Add</button>
      </div>
    );
  }
}

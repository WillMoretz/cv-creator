/* eslint-disable no-useless-constructor */
import { Component } from "react";
import JobHistoryItem from "./JobHistoryItem";
import { v4 as uuid } from "uuid";

export default class JobHistory extends Component {
  constructor(props) {
    super(props);
  }

  addItem() {
    this.props.add();
  }

  deleteItem(key) {
    this.props.delete(key);
  }

  updateItem(key, property, e) {
    this.props.update(key, property, e);
  }

  render() {
    const jobHistoryItems = this.props.values.map((item) => (
      <JobHistoryItem
        key={item.key}
        keyProp={item.key}
        position={item.position}
        company={item.company}
        start={item.start}
        end={item.end}
        delete={this.deleteItem.bind(this)}
        update={this.updateItem.bind(this)}
      />
    ));

    return (
      <div>
        <div>Job History</div>
        <div>{jobHistoryItems}</div>
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

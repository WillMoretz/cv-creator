/* eslint-disable no-useless-constructor */
import { Component } from "react";
import JobHistoryItem from "./JobHistoryItem";
import { v4 as uuid } from "uuid";

export default class JobHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  reset() {
    this.setState((prevState) => ({
      items: [],
    }));
  }

  addItem() {
    this.setState((prevState) => ({
      items: [...prevState.items, { index: prevState.items.length + 1 }],
    }));
  }

  deleteItem(index) {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.index !== index),
    }));
  }

  render() {
    const jobHistoryItems = this.state.items.map((item) => (
      <JobHistoryItem
        key={uuid()}
        index={item.index}
        delete={this.deleteItem.bind(this)}
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

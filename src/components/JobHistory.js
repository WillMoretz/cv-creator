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
      items: [...prevState.items, { key: uuid() }],
    }));
  }

  deleteItem(key) {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.key !== key),
    }));
  }

  render() {
    const jobHistoryItems = this.state.items.map((item) => (
      <JobHistoryItem
        key={item.key}
        keyProp={item.key}
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

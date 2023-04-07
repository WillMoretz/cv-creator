/* eslint-disable no-useless-constructor */
import { Component } from "react";
import EducationItem from "./EducationItem";
import { v4 as uuid } from "uuid";

export default class Education extends Component {
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
    const educationItems = this.state.items.map((item) => (
      <EducationItem
        key={uuid()}
        index={item.index}
        delete={this.deleteItem.bind(this)}
      />
    ));

    return (
      <div>
        <div>Education</div>
        <div>{educationItems}</div>
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

/* eslint-disable no-useless-constructor */
import { Component } from "react";
import EducationItem from "./EducationItem";
import { v4 as uuid } from "uuid";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  addItem() {
    this.props.add();
  }

  deleteItem(key) {
    this.props.delete(key);
  }

  render() {
    const educationItems = this.props.values.map((item) => (
      <EducationItem
        key={item.key}
        keyProp={item.key}
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

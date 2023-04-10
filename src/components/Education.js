/* eslint-disable no-useless-constructor */
import { Component } from "react";
import EducationItem from "./EducationItem";

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

  updateItem(key, property, e) {
    this.props.update(key, property, e);
  }

  render() {
    const educationItems = this.props.values.map((item) => (
      <EducationItem
        key={item.key}
        keyProp={item.key}
        name={item.name}
        subject={item.subject}
        degree={item.degree}
        start={item.start}
        end={item.end}
        delete={this.deleteItem.bind(this)}
        update={this.updateItem.bind(this)}
      />
    ));

    return (
      <div className="form-row">
        <div className="items-title">Education</div>
        <div>{educationItems}</div>
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

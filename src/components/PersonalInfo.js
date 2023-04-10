/* eslint-disable no-useless-constructor */
import { Component } from "react";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  update(property, e) {
    this.props.update(property, e);
  }

  render() {
    return (
      <form>
        <div className="items-title form-row">Personal Information</div>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.props.values.name}
            onChange={(e) => this.update("name", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.props.values.title}
            onChange={(e) => this.update("title", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.props.values.email}
            onChange={(e) => this.update("email", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={this.props.values.phone}
            onChange={(e) => this.update("phone", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.props.values.description}
            onChange={(e) => this.update("description", e)}
          />
        </div>
      </form>
    );
  }
}

/* eslint-disable no-useless-constructor */
import { Component } from "react";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      email: "",
      phone: "",
      description: "",
    };
  }

  reset() {
    this.setState((prevState) => ({
      name: "",
      title: "",
      email: "",
      phone: "",
      description: "",
    }));
  }

  updateState(property, e) {
    if (property === "name") {
      this.setState({ name: e.target.value });
      return;
    }
    if (property === "title") {
      this.setState({ title: e.target.value });
      return;
    }
    if (property === "email") {
      this.setState({ email: e.target.value });
      return;
    }
    if (property === "phone") {
      this.setState({ phone: e.target.value });
      return;
    }
    if (property === "description") {
      this.setState({ description: e.target.value });
      return;
    }
  }

  render() {
    return (
      <form>
        <div className="form-row">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.updateState("name", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={(e) => this.updateState("title", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={(e) => this.updateState("email", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={this.state.phone}
            onChange={(e) => this.updateState("phone", e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={(e) => this.updateState("description", e)}
          />
        </div>
      </form>
    );
  }
}

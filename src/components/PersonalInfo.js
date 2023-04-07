import { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone Number: </label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" />
        </div>
      </form>
    );
  }
}

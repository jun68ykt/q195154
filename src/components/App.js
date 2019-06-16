import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  renderResult() {
    console.log(this.props.result);
    if (!this.props.result) {
      return <div>No Result!!!</div>;
    } else {
      return <div>{this.props.result}</div>;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.getGenders}>get genders</button>
        {this.renderResult()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { result: state.genders.result };
};

export default connect(
  mapStateToProps,
  actions
)(App);

import React, { Component } from 'react';
import '../styles/question-editor.css';

class QuestionEditor extends Component {

  constructor(props) {
    super(props);

    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="columns">
        <div className="column col-6 centered question-editor">
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Put here what you're deciding about" />
        </div>
      </div>
    )
  }
}

export default QuestionEditor;
import React, { Component } from 'react';
import Textarea from 'react-autosize-textarea';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0, value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    if (event.target.value.match(/^[^*].*/g)) {
      this.setState({value: "* " + event.target.value});
    } else {
      this.setState({value: event.target.value});
    }
    this.props.onChange(event);
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.setState({
        value: event.target.value + "* "
      })
    }
  }

  render() {
    return (
      <Textarea className={this.props.className} onChange={this.handleChange} onKeyUp={this.handleKeyUp} placeholder="* make a list" value={this.state.value}/>
    )
  }
}

export default Editor;
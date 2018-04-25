import React, { Component } from 'react';
import Editor from './editor-component';
import '../styles/column-editor.css';

class ColumnEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorCounter: 0 };
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleEditorBoxOnClick = this.handleEditorBoxOnClick.bind(this);
  }

  handleEditorChange(event) {
    const matched = (event.target.value || '').match(/^([*]{1})(.*)[\n]?/gm);
    this.setState({
      editorCounter: (matched !== null) ? matched.length : 0
    });
  }

  handleEditorBoxOnClick(e) {
    const node = e.target.getElementsByTagName('textarea')[0];
    node && node.focus();
  }

  render() {
    const editor = () => {
      const props = {
        className: "col-12 form-input",
        onChange: this.handleEditorChange
      };
      return <Editor {...props}/>
    };

    return (
      <div className="column col-6 col-gapless column-editor-comp">
        <div className="columns">
          <div className=" column col-11 centered">
            <div className="column-editor-head divider text-center" data-content={this.props.name} />
            <span className={this.getCounterClass()}>{this.state.editorCounter}</span>
          </div>
        </div>
        <div className="columns editor max-height" onClick={this.handleEditorBoxOnClick}>
          <div className="column col-11">
            {editor()}
          </div>
        </div>
      </div>
    )
  }

  getCounterClass() {
    const float = this.props.counterPosition === 'right' ? 'float-right' : '';
    return `${this.props.labelClass} ${float}`;
  }

}

export default ColumnEditor;
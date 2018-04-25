import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

class ModalBase extends Component {

  render() {
    return (
      <div className="about-modal modal active">
        <div className="modal-overlay"/>
        <div className="modal-container">
          <div className="modal-header">
            <Link className="btn btn-clear float-right" to="/"/>
            <div className="modal-title">About</div>
          </div>
          <div className="modal-body">
            <div className="content">
              <ReactMarkdown source={this.props.content} />
            </div>
          </div>
          {!this.props.noBottomCloseBtn &&
            <div className="modal-footer">
              <Link className="btn btn-link" to="/">Close</Link>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ModalBase;
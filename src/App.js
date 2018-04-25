import './app/styles/app.css';
import React, {Component} from 'react';
import Header from './app/components/header-component';
import QuestionEditor from './app/components/question-editor-component';
import ColumnEditor from './app/components/column-eitor-component';
import ModalComponent from "./app/components/modal-component";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import howTo from './app/content/howTo';
import about from './app/content/about';

class App extends Component {

  createBrowserHistory() {
    return createBrowserHistory();
  }

  render() {
    return (
      <Router history={this.createBrowserHistory()}>
        <div className="container">
            <Header/>
          <QuestionEditor/>
          <div className="columns two-column-view">
            <div className="col-10 centered">
              <div className="columns max-height">
                <ColumnEditor name="PROS" labelClass="label label-success" counterPosition="right"/>
                <ColumnEditor name="CONS" labelClass="label label-danger"/>
              </div>
            </div>
          </div>
          <div className="by-who centered text-center">
            <span>coded with ♥ by <a href="http://wielo.co">wielo</a></span>
          </div>
          <Route exact path="/" />
          <Route path="/how-to" render={() => (<ModalComponent content={howTo}/>)}/>
          <Route path="/about" render={() => (<ModalComponent content={about} noBottomCloseBtn={true}/>)}/>

        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';

import io from 'socket.io-client';
const socket = io('http://localhost:4000');

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron />
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route component={NoMatch}/>
              </Switch>
            </Router>
            <Form>Test</Form>
            <Form.Group>
              <Form.Control size="lg" type="text" placeholder="Large text" />
              <br />
              <Form.Control type="text" placeholder="Normal text" />
              <br />
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Form.Group>
          </Layout>
          
      </React.Fragment>
    );
  }

}

export default App;

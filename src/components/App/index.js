import React, { Component } from 'react';
import {Router} from '@reach/router';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'

import List from '../List'
import Create from '../Create'
import Nav from '../Nav'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Nav/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Router>
                <List path="/"/>
                <Create path="/create"/>
            </Router>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

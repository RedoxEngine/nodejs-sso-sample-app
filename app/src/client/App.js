import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(response => this.setState({ jwt: response.cachedJWT }));
  }

  render() {
    const { jwt } = this.state;
    return (
      <div>
        {jwt ? <h1>{`Hello ${jwt.name}`}</h1> : <h1>Loading.. please wait!</h1>}
        <pre>
          <code>
            {JSON.stringify(jwt, undefined, 2)}
          </code>
        </pre>
      </div>
    );
  }
}

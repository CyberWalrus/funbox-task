import React, {Component} from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      label: ``
    };
    this.handleLabel = this.handleLabel.bind(this);
  }

  componentDidMount() {
    fetch(`/api/getUsername`)
      .then((res) => res.json())
      .then((user) => this.setState({username: user.username}));
  }

  handleLabel(event) {
    this.setState({label: event.target.value});
  }

  render() {
    const {username} = this.state;
    return (
      <div>
        <div>
          <input type="text"
            value={this.state.label}
            onChange={this.handleLabel} />
        </div>
        <div>
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        </div>
        <div>
          <YMaps>
            <div>
              My awesome application with maps!
              <Map defaultState={{center: [55.75, 37.57], zoom: 9}} />
            </div>
          </YMaps>
        </div>
      </div>
    );
  }
}

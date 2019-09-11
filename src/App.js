import React from 'react';
import './App.css';
import settings from './config.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yo_responses: []
    };
  }

  onYoClickHandler = () => {
    fetch(`${settings.API_URL}/api/v1/yo`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(
            { yo_responses: this.state.responses.concat(result.message) }
          );
        }
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Yo Frontend</h1>
        <p> Connected to { settings.API_URL }</p>
        <div>
          <button onClick={this.onYoClickHandler}>Say "Yo"</button>
          { this.state.yo_responses.map(response => (
            <p>{ response }</p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

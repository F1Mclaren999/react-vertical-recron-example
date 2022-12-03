import React, { Component } from 'react';
import { render } from 'react-dom';
import { ReQuartzCron } from '@sbzen/re-cron';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Simple Vertical Cron Gen - ReCron',
      cron: '',
    };
  }

  onChangeHandler = (event) => {
    console.log('event...from cron...', event);
    this.setState({ cron: event });
  };

  render() {
    return (
      <div id="main" style={{ margin: '30px' }}>
        <h3>{this.state.name}</h3>
        <input className="form-control mb-4" readOnly value={this.state.cron} />
        <div className="my-vertical-cron">
          <ReQuartzCron
            onChange={this.onChangeHandler}
            value={this.state.cron}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

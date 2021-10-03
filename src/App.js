import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    render() {
        const buttonNames = Object.keys(this.state);
        return (
            <div className="App">
                <section>
                    <Feedback names={buttonNames} />
                    <Statistics state={this.state} />
                </section>
            </div>
        );
    }
}

export default App;

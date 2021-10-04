import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onClickButton = e => {
        const currentState = e.currentTarget.value;
        this.setState(prevState => ({
            ...prevState,
            [currentState]: prevState[currentState] + 1,
        }));
    };
    countZero = () =>
        this.state.good === 0 &&
        this.state.neutral === 0 &&
        this.state.bad === 0
            ? true
            : false;

    calcTotalFeedback = () =>
        Object.values(this.state).reduce((acc, total) => (acc += total));

    calcPositiveFeedback = () =>
        Math.trunc((this.state.good / this.calcTotalFeedback()) * 100);

    render() {
        const buttonNames = Object.keys(this.state);

        return (
            <>
                <Feedback
                    names={buttonNames}
                    onClickButton={this.onClickButton}
                />
                {this.countZero() ? (
                    <Notification message="No feedback given" />
                ) : (
                    <Statistics
                        stateValue={this.state}
                        total={this.calcTotalFeedback()}
                        totalPositive={this.calcPositiveFeedback()}
                    />
                )}
            </>
        );
    }
}

export default App;

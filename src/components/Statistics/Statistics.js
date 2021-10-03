import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

class Statistics extends Component {
    static defaultProps = {
        state: { good: 0, neutral: 0, bad: 0 },
    };

    static propTypes = {
        state: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className={s.statistics}>
                <h2 className={s.title}>Statistics</h2>
                <ul>{}</ul>
            </div>
        );
    }
}

export default Statistics;

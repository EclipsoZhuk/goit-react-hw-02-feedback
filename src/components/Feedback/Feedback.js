import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

class Feedback extends Component {
    static defaultProps = {
        names: [],
    };

    static propTypes = {
        names: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div className={s.feedback}>
                <h1 className={s.title}>Please leave feedback</h1>
                <div>
                    {this.props.names.map(name => (
                        <button
                            key={name}
                            type="button"
                            value={name}
                            className={s.buttons}
                            // onClick={}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Feedback;

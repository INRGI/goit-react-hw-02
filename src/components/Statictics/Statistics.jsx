import PropTypes from 'prop-types';
import { Element, List } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return (
        <List>
            <Element>Good: {good}</Element>
            <Element>Neutral: {neutral}</Element>
            <Element>Bad: {bad}</Element>
            <Element>Total: {total}</Element>
            <Element>Positive Feedback: {positivePercentage}%</Element>
        </List>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
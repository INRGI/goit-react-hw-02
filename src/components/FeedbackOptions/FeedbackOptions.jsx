import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, onReset }) => {
    return (
        <Container>
            {options.map(option => (
                <Button
                    key={option}
                    type="button"
                    onClick={()=>onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            ))}
            <Button onClick={onReset}>Reset</Button>
        </Container>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default FeedbackOptions;
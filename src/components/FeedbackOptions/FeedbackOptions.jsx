import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, onReset, total }) => {
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
            {total !== 0 ?
                <Button onClick={onReset}>Reset</Button>
                : null
            }
        </Container>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
};

export default FeedbackOptions;
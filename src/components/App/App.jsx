import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";
import Statictics from "../Statictics";
import { useState } from "react";
import { Container } from "./App.styled";
import Description from "../Description/Description";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => good + neutral + bad;
  const total = totalFeedback();

  const positivePercentage = () => Math.round((good / total) * 100) || 0;
  const percentage = positivePercentage();

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
          <Description />
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
          {total !== 0 ? (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage} />
          ) : (
            <Notification message="There is no feedback😿" />
          )}
      </Container>
    );
};

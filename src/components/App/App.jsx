import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";
import Statictics from "../Statictics";
import { useState } from "react";
import { Container } from "./App.styled";
import Description from "../Description/Description";

export const App = () => {
  const [good, setGood] = useState(() => {
    const savedGood = window.localStorage.getItem("saved-good");
    if (savedGood !== null) {
      return JSON.parse(savedGood);
    }
    return 0;
  });
  const [neutral, setNeutral] = useState(() => {
    const savedNeutral = window.localStorage.getItem("saved-neutral");
    if (savedNeutral !== null) {
      return JSON.parse(savedNeutral);
    }
    return 0;
  });
  const [bad, setBad] = useState(() => {
    const savedBad = window.localStorage.getItem("saved-bad");
    if (savedBad !== null) {
      return JSON.parse(savedBad);
    }
    return 0;
  });

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prev => prev + 1);
        localStorage.setItem('saved-good', good);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        localStorage.setItem('saved-neutral', neutral);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        localStorage.setItem('saved-bad', bad);
        break;
      default:
        return;
    }
  };

  const onReset = () => window.localStorage.clear();

  const totalFeedback = () => good + neutral + bad;
  const total = totalFeedback();

  const positivePercentage = () => Math.round((good / total) * 100) || 0;
  const percentage = positivePercentage();

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
          <Description />
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} onReset={onReset} />
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

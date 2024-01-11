import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";
import Statictics from "../Statictics";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    localStorage.setItem('saved-good', good);
    localStorage.setItem('saved-neutral', neutral);
    localStorage.setItem('saved-bad', bad);
  }, [bad, good, neutral]);

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

  const onReset = () => {
    window.localStorage.clear();
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const totalFeedback = () => good + neutral + bad;
  const total = totalFeedback();

  const positivePercentage = () => Math.round((good / total) * 100) || 0;
  const percentage = positivePercentage();

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
          <Description />
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} onReset={onReset} total={total} />
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

import { useState } from 'react';
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedback = (name) => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  
  const options = ['good', 'neutral', 'bad'];
  
  const totalAmount = () => {
    return good + neutral + bad
  }
  
  const totalPercentageAmount = () => {
    return Math.round(good * 100 / totalAmount() || 0)
  };


  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttons={options}
          onClickFeedback={onClickFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalAmount()}
          percentage={totalPercentageAmount()}
        />
      </Section>
    </div>
  );
}
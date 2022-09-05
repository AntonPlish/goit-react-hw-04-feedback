import { Component } from 'react';
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onClickFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  
  options = ['good', 'neutral', 'bad'];
  
  totalAmount = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }
  
  totalPercentageAmount = () => {
    return Math.round(this.state.good * 100 / this.totalAmount() || 0)
  };
  
  render() {
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
            buttons={this.options}
            onClickFeedback={this.onClickFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalAmount()}
            percentage={this.totalPercentageAmount()}
          />
        </Section>
      </div>
    );
  }
}

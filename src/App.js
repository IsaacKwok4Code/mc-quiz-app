import './App.css';
import {shuffle} from 'lodash';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import QuestionList from '../src/components/questionList/QuestionList';

const QUIZ_Questions_DATA = [{
  id: 1,
  prompt: "What is your name?",
  answer: "King Arthur",
  distractors: ["Sir Lancelot", "Sir Galahad", "Sir Robin"]
}, {
  id: 2,
  prompt: "What is your quest?",
  answer: "To seek the Holy Grail",
  distractors: ["Fame", "Fortune", "Love"]
}, {
  id: 3,
  prompt: "What is the air-speed velocity of an unladen swallow?",
  answer: "What do you mean? An African or European swallow?",
  distractors: ["24mph", "12mph", "18mph"]
}]

function App() {
  return (
    <div className="App">
      <h1>Quiz!</h1>
      <p>Your point is X out of X</p>
      <QuestionList items={QUIZ_Questions_DATA}/>
    </div>
  );
}

export default App;

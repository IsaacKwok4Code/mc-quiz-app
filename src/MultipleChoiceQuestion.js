import { useState } from "react";

export default function MultipleChoiceQuestion({ question }){
  const {prompt, id, isAnswered, isCorrect, options} = question
  const [isAnswer, setIsAnser] = useState(isAnswered);
  const [isCor, setIsCor] = useState(isCorrect);

  const checkAnswer = (event) => {
    setIsAnser(true);
    const data = event.target.textContent;
    console.log('i want to see ',  data);
    if (data === question.answer) {
      setIsCor(true);
    } else {
      setIsCor(false);
    }
    return '';
  };

  return (
    <div className="MultipleChoice">
      <p>{prompt}</p>
      <ul>
        {options.map(option => (
          <li key={`${id}-${option}`}>
            <button
              onClick={checkAnswer}
            >{option}</button>
          </li>
        ))}
      </ul>
      {
        isAnswer && (isCor
          ? <p className="correct">Correct!</p>
          : <p className="incorrect">Incorrect.</p>
        )
      }
    </div>
  )
}

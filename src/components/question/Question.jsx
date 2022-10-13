import React, { useState } from 'react';
import { shuffle } from 'lodash';

function Question(props) {
    console.log(props);
    const { prompt, id, isAnswered, isCorrect, options } = props.data;
    const [isAnswer, setIsAnser] = useState(isAnswered);
    const [isCor, setIsCor] = useState(isCorrect);

    const availableAnswer = shuffle([...props.data.distractors, props.data.answer]);
    const [answer, setAnswer] = useState(availableAnswer);

    const checkAnswer = (event) => {
        setIsAnser(true);
        const data = event.target.textContent;
        if (data === props.data.answer) {
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
                {answer.map(option => (
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
};

export default Question;
import React, { useState } from 'react';
import Question from '../question/Question';

function QuestionList(props) {
    const [questions, setQuestions] = useState(props.items);


    return(
        <div>
            {questions.map((itm) => (<Question data={itm} />))}
        </div>
    );
}

export default QuestionList;
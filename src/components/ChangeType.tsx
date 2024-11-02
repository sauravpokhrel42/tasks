import React, { useState } from "react";

type QuestionType = "multiple_choice_question" | "short_answer_question";

function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const toggleType = () => {
        setQuestionType(
            questionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <button onClick={toggleType}>Change Type</button>
            <div>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}

export { ChangeType };

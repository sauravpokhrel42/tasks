import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <label htmlFor="mcq-select">Choose an answer: </label>
                <select
                    id="mcq-select"
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                    }}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {selectedOption === expectedAnswer ?
                    "✔️ Correct!"
                :   "❌ Incorrect!"}
            </div>
        </div>
    );
}

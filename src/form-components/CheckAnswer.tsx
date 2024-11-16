import React, { useState } from "react";

export function CheckAnswer({ expectedAnswer }: { expectedAnswer: string }) {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => {
                    setUserAnswer(e.target.value);
                }}
                role="textbox"
            />
            <span>{userAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}

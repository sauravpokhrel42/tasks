import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({ onClick }: { onClick: () => void }): React.JSX.Element {
    return <Button onClick={onClick}>Next Color</Button>;
}

function ColorPreview({ color }: { color: string }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const nextColor = () => {
        setColorIndex((1 + colorIndex) % COLORS.length);
    };

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor onClick={nextColor} />
                <ColorPreview color={COLORS[colorIndex]} />
            </div>
        </div>
    );
}

import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <div className="Columns">
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="RedRectangle"
                                style={{ backgroundColor: "red" }}
                            >
                                Left Column
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="RedRectangle"
                                style={{ backgroundColor: "red" }}
                            >
                                Right Column
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className="App-header">App Header woahhhh</header>
            <h1>This is a heading text !!!</h1>
            <h1>Hello World COS420</h1>
            <img
                height="400"
                width="400"
                src="https://a-z-animals.com/media/2018/09/Gecko-on-stump.jpg"
                alt="A picture of a gecko"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. Hello World! - Saurav
            </p>
            <ol role="list">
                <li>List:</li>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                log Hello World
            </Button>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <DoubleHalf />
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
        </div>
    );
}

export default App;

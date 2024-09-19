import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <div className="Columns">
                <Container>
                    <Row>
                        <Col>
                            <div className="RedRectangle"> Left Column</div>
                        </Col>
                        <Col>
                            <div className="RedRectangle">Right Column</div>
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
            <ol>
                <li> List: </li>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. Hello World! - Saurav
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                log Hello World
            </Button>
        </div>
    );
}

export default App;

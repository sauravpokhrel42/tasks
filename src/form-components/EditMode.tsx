import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form>
                    <Form.Check
                        type="switch"
                        id="edit-mode-switch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={(e) => {
                            setEditMode(e.target.checked);
                        }}
                        className="form-switch"
                    />
                </Form>
            </div>
            {editMode ?
                <div>
                    <Form.Group controlId="nameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}

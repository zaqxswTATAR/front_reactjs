// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateSequence = () => {

    const [inputData, setInputData] = useState({
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        numY: 0,
        numX: 0,
        numZ: 0,
    });

    // useEffect(() => {

    // }, [inputData]);

    const navigate = useNavigate();

    const onSubmit = () => {
        let a = inputData.num2 - inputData.num1;

        if ((inputData.num3 == inputData.num2 + a * 2) && (inputData.num4 == inputData.num3 + a * 3)) {
            axios.post('http://localhost:3000/api/create-sequence', inputData).then(res => {
                console.log(res.data)
                console.log('Sequence successfully created!')
                navigate('/sequence-list');
            })
            .catch((err) => {
                console.log(err)
            });
        } else {
            alert('Please input in the following relation:\n(Number 3) = (Number 2) + a * 2\n(Number 4) = (Number 3) + a * 3\nwhile a = (Number 2)-(Number 1)');
        }
    }

    return (
        <>
            <Container>
                <div className='form-wrapper mt-5'>
                    <h1>Create Sequence</h1>
                    <Form>
                        <Form.Group controlId='Number 1' className='mt-3'>
                            <Form.Label>Number 1</Form.Label>
                            <Form.Control
                                type="number"
                                value={inputData.num1}
                                onChange={(e) => {
                                    setInputData({ ...inputData, num1: parseInt(e.target.value) })
                                }} />
                        </Form.Group>
                        <Form.Group controlId='Number 2' className='mt-3'>
                            <Form.Label>Number 2</Form.Label>
                            <Form.Control
                                type="number"
                                value={inputData.num2}
                                onChange={(e) => {
                                    setInputData({ ...inputData, num2: parseInt(e.target.value) })
                                }} />
                        </Form.Group>
                        <Form.Group controlId='Number 3' className='mt-3'>
                            <Form.Label>Number 3</Form.Label>
                            <Form.Control
                                type="number"
                                value={inputData.num3}
                                onChange={(e) => {
                                    setInputData({ ...inputData, num3: parseInt(e.target.value) })
                                }} />
                        </Form.Group>
                        <Form.Group controlId='Number 4' className='mt-3'>
                            <Form.Label>Number 4</Form.Label>
                            <Form.Control
                                type="number"
                                value={inputData.num4}
                                onChange={(e) => {
                                    setInputData({ ...inputData, num4: parseInt(e.target.value) })
                                }} />
                        </Form.Group>
                        <Button variant='success' size='lg' block='block' className='mt-3' onClick={() => { onSubmit() }}>
                            Create Sequence
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )

}
export default CreateSequence;
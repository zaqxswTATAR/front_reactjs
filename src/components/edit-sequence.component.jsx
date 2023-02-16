import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EditSequence = () => {

    const [inputData, setInputData] = useState({
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        numY: 0,
        numX: 0,
        numZ: 0,
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/api/edit-sequence/' + params.id).then(res => {
            setInputData({
                num1: res.data.num1,
                num2: res.data.num2,
                num3: res.data.num3,
                num4: res.data.num4,
                numX: res.data.numX,
                numY: res.data.numY,
                numZ: res.data.numZ
            })
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    const onSubmit = () => {
        axios.put('http://localhost:3000/api/update-sequence/' + params.id, inputData).then(res => {
            console.log(res.data)
            console.log('Sequence successfully updated!')
            navigate('/sequence-list');
          })
          .catch((err) => {
            console.log(err)
          });
    }

    return (
        <>
            <Container>
                <div className='form-wrapper mt-5'>
                    <h1>Edit Sequence</h1>
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
                            Update Sequence
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )

}
export default EditSequence;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import SequenceTableRow from './SequenceTableRow';

const SequenceList = () => {

    const [listData, setListData] = useState([]);

    const getListData = () => {
        axios.get('http://localhost:3000/api').then(res => {
            setListData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getListData()
    }, []);

    const DataTable = () => {
        return listData.map((res, i) => {
            return <SequenceTableRow onChange={()=>{ getListData() }} obj={res} key={i} />
        })
    }

    return (
        <>
            <Container>
                <div className='table-wrapper mt-5'>
                    <h1 className='mb-4'>Squence List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Number 1</th>
                                <th>Number 2</th>
                                <th>Number 3</th>
                                <th>Number 4</th>
                                <th>X</th>
                                <th>Y</th>
                                <th>Z</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DataTable()}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    )

}
export default SequenceList
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bootstrap/Button'

const SequenceTableRow = ({onChange, obj}) => {

    const deleteSequence = (id) => {
        if (window.confirm("Do you really want to delete?")) {
            axios.delete('http://localhost:3000/api/delete-sequence/' + id).then(res => {
                console.log('Sequence successfully deleted!')
                onChange()
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <tr>
                <td>{obj.num1}</td>
                <td>{obj.num2}</td>
                <td>{obj.num3}</td>
                <td>{obj.num4}</td>
                <td>{obj.numX}</td>
                <td>{obj.numY}</td>
                <td>{obj.numZ}</td>
                <td>
                    <Link to={'/edit-sequence/' + obj._id} className='edit-link btn btn-primary'>
                        Edit
                    </Link>
                    <Button onClick={() => { deleteSequence(obj._id) }} variant='danger'>Delete</Button>
                </td>
            </tr>
        </>
    )

}
export default SequenceTableRow;
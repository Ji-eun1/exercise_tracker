import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ExercisesList = () => {
    const [exercises, setExercises] = useState([])

    const getExercises = async () => {
        try{
            const res = await axios.get('http://localhost:5000/exercises')
            setExercises(res.data)
        } catch (err){
            console.log(err)
        }
    }

    const deleteExercise = async (e) => {
        const index = e.target.parentNode.parentNode.childNodes[0].innerText
        const id = exercises[index]._id;
        try{
            const res = await axios.delete(`http://localhost:5000/exercises/${id}`)
            console.log(res.data)
        } catch(err){
            console.log(err)
        }
    }

    const clickDeleteBtn = (e) => {
        e.preventDefault();
        deleteExercise(e);
    }

    useEffect(() => {
        getExercises();
    }, [exercises])

    return(
        <div>
            <h3 style={{ margin:'30px 0' }}>Exercises List</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, i) => {
                        return (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{exercise.username}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.duration}</td>
                                <td>{exercise.date.slice(0, 10)}</td>
                                <td><Link to={'/edit/' + exercise._id}>
                                    <Button variant="dark" size="sm">Update this</Button>
                                </Link></td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={ clickDeleteBtn }>Delete this</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ExercisesList;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditExercise = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    const onChangeUsername = e => {
        let newUsername = e.target.value;
        setUsername(newUsername);
    }

    const onChangeDescription = e => {
        let newDescription = e.target.value;
        setDescription(newDescription);
    }

    const onChangeDuration = e => {
        let newDuration = e.target.value;
        setDuration(newDuration);
    }

    const onChangeDate = e => {
        let newDate = e.target.value;
        setDate(newDate);
    }

    const onSubmit = e => {
        e.preventDefault();
        updateExercise();  
        window.location = '/';
    }

    const updateExercise = async () => {
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        try{
            const res = await axios.put(`/exercises/update/${id}`, exercise)
            console.log(res.data)
        } catch (err){
            console.log(err)
        }
    }

    const getUsers = async () => {
        try{
            const res = await axios.get('/users')
            const newUsers = res.data.map((user => user.username))
            setUsers(newUsers)
        } catch (err){
            console.log(err)
        }
    }

    const getUser = async () => {
        try{
            const res = await axios.get(`/exercises/${id}`)
            const { username, description, duration, date } = res.data;
            setUsername(username)
            setDescription(description)
            setDuration(duration)
            setDate(date)
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers();
        getUser();
    }, [])

    return(
        <div>
            <h3 style={{ margin:'30px 0' }}>Edit Exercise Log</h3>
            <Form onSubmit={ onSubmit }>
                <fieldset >
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Select">Select User</Form.Label>
                        <Form.Select id="Select" required value={ username } onChange={ onChangeUsername }>
                            {users.map((user, i) => {
                                return <option key={i} value={user}>{user}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Description</Form.Label>
                        <Form.Control id="TextInput" placeholder="Description" value={ description } onChange={ onChangeDescription } />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Duration ( minutes )</Form.Label>
                        <Form.Control id="TextInput" placeholder="Duration" value={ duration } onChange={ onChangeDuration } />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" value={ date.slice(0, 10) } onChange={ onChangeDate }/>
                    </Form.Group>
                    
                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
    )
}

export default EditExercise;
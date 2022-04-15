import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateExercise = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year + '-' + month  + '-' + day;
    
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');
    const [users, setUsers] = useState([]);

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
        postExercise();    
        setUsername('');
        setDescription('');
        setDuration('');
        setDate(dateString);
        window.location = '/';
    }

    const postExercise = async () => {
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        try{
            const res = await axios.post('/exercises/add', exercise)
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
            setUsername(newUsers[0])
            setDate(dateString)
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return(
        <div>
            <h3 style={{ margin:'30px 0' }}>Create New Exercise Log</h3>
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
                        <Form.Control type="date" value={ date } onChange={ onChangeDate }/>
                    </Form.Group>
                    
                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
    )
}

export default CreateExercise;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateUser = () => {
    const [username, setUsername] = useState('');

    const onChangeUsername = e => {
        let newUsername = e.target.value;
        setUsername(newUsername);
    }

    const onSubmit = e => {
        e.preventDefault();
        postUser();
        setUsername('');
        window.location = '/create';
    }

    const postUser = async () => {
        const user = {
            username: username,
        }
        try{
            const res = await axios.post('/users/add', user)
            console.log(res.data)
        } catch (err){
            console.log(err)
        }
    }

    return(
        <div>
            <h3 style={{ margin:'30px 0' }}>Register</h3>
            <Form onSubmit={ onSubmit }>
                <fieldset >
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">User Name</Form.Label>
                        <Form.Control id="TextInput" placeholder="User Name" value={ username } onChange={ onChangeUsername } />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
    )
}

export default CreateUser;
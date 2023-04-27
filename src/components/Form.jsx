import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//commit with message "machine problem no. 3"

function BasicExample() {
    //const fields = ['Emal Address', 'Password', 'Confirm Password', 'First Name'];
    const fields = [
        { label: 'Email Address', type: 'text', placeholder: 'Input Email'},
        { label: 'Password', type: 'password', placeholder: 'Input Password'}
    ]
    const [emailAddrs, setEmailAddrs] = useState('Jessica');
    const [passw, setPassw] = useState('Password');

    return (
        <Form>
            {fields.map((field) => {
                return(
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control type={field.type} placeholder={field.placeholder}
                        onChange={(e) => setEmailAddrs(e.target.value)}/>
                    </Form.Group>
                )
            })}
            <Button variant='primary' type='type'>Submit</Button>
            <br />
            <br />
            <h2>Hi {emailAddrs}</h2>
        </Form>
    )
}

export default BasicExample;
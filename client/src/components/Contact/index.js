import React from 'react'
import Form from 'react-bootstrap/Form'

const Contact = () =>{
    return(
        <Form>
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="form.message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="4" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Contact;
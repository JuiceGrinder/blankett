import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addLink } from '../../redux/linkSlice'
import { Button, Form } from 'react-bootstrap'

export const InitLinkForm = ({headerInfo}) => {  
    
    const [initState, setInitState] = useState(headerInfo);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInitState(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addLink(initState))
        //console.log(initState);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Application</Form.Label>
                    <Form.Control
                        name="name"
                        onChange={handleChange} 
                        placeholder="Application"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>URL</Form.Label>
                    <Form.Control
                        name="url"
                        onChange={handleChange} 
                        placeholder="URL" />
                    <Form.Text className="text-muted">
                    Don't forget http(s)://
                    </Form.Text>
                </Form.Group>
                <Button className="float-end" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
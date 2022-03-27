import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupListAsync } from '../redux/linkSlice'
import { LinkGroup } from '../components/link/linkGroup';
import { InitLinkForm } from '../components/link/initLinkForm';
import { Button, Modal } from 'react-bootstrap'

export const Dashboard = () => {

    const groupList = useSelector((state) => state.links);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Dispatch Application List Async Call
    useEffect(() => {
        dispatch(fetchGroupListAsync())
    }, [dispatch])
    
    return (
        <>
            <LinkGroup linkGroups={groupList}/>
            <Button onClick={handleShow}>This is button</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Add Employee
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InitLinkForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
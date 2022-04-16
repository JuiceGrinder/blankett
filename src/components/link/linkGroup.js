import React, {useState, useEffect} from 'react';
import { Link } from './link';
import { InitLinkForm } from './initLinkForm';
import { Button, Modal } from 'react-bootstrap'

export const LinkGroup = ({linkGroups}) => {    

    const [showInit, setShowInit] = useState(false);
    const [initHeaderInfo, setInitHeaderInfo] = useState(null);

    const handleInitClose = () => setShowInit(false);
    const handleInitShow = (group) => {
        setInitHeaderInfo({
            header: group.header,
            bookmarkGroup: false
        })
        setShowInit(true);
    }

    return (
        <>
            {Object.entries(linkGroups).map(([_, group]) => {
                return(
                    <div key={group.header}>
                        <h1>{group.header}</h1>
                        <Link listOfLinks={group.links}/>
                        <Button onClick={() => handleInitShow(group)}>Add</Button>
                    </div>
                )
            })}
            
            <Modal show={showInit} onHide={handleInitClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Add Application
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InitLinkForm headerInfo={initHeaderInfo} />
                </Modal.Body>
            </Modal>
        </>
    )
}
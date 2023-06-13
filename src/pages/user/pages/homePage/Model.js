import React from 'react'
import { Modal } from 'react-bootstrap';
import './Model.css'
import { RectangleButton } from '../../../../components/buttonRectangle';
import { PitInput, PitInputLabelled, PitTextAreaLabelled } from '../../../../components/inputs';
export function ShowFormmodel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>UserName</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitTextAreaLabelled rows={4} inputTitle='Description' placeholder='Enter Description'/>
                    <PitInputLabelled inputTitle='Image' height={'35px'} type='File' ></PitInputLabelled>
                </Modal.Body>
                <Modal.Footer>
                    <RectangleButton danger onClick={props.onClose} height='40px' >
                        Close
                    </RectangleButton>
                    <RectangleButton onClick={props.onClose} height='40px' >
                        Post
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}

import { Modal, Button } from 'react-bootstrap'
import AddTodoForm from "./AddTodoForm"
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react"

function AddTodoModal(props) {
    const [show, setShow] = useState(false)

    const closeModal = () => {
        setShow(false)
    }

    return (
        <div>
            <Button variant='outline-primary' onClick={() => setShow(true)} block>Add</Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size='lg'
            >
                <Modal.Header closeButton>
                    <h2>Add 'Todo' Item</h2>
                </Modal.Header>
                <Modal.Body>
                    <AddTodoForm closeModal={closeModal} reloadPage={props.reloadPage} getAllTodo={props.getAllTodo} getCookie={props.getCookie}/>
                </Modal.Body>

            </Modal>
        </div>

    )
}

export default AddTodoModal



import { Modal, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form'
import { useState } from "react"
import axios from "axios"
import jQuery from 'jquery'

function AddTodoForm() {
    const [show, setShow] = useState(false)

    const closeModal = () => setShow(false)

    const {register, handleSubmit} = useForm()

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    var csrfToken = getCookie('csrftoken')

    function onSubmitTodoForm(data) {

        closeModal()

        console.log(data)

        axios.post('http://localhost:8000/api/todo-list-create/', data, {
            headers: {'X-CSRFToken': csrfToken}
        })

            .then((response) => {
                console.log(response)
            })

        window.location.reload()

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
                    <h2>Add Item</h2>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmitTodoForm)}>
                        <Form.Group controlId='titleForm'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control name='title' placeholder='Do.... something?' ref={register}/>
                        </Form.Group>
                        <Form.Group controlId='descriptionForm'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='details' as='textarea' rows='5' placeholder='Idk' ref={register}/>
                        </Form.Group>
                        <Form.Group controlId='completedForm'>
                            <Form.Check name='completed' label='Completed' ref={register}/>
                        </Form.Group>
                        <Button type='submit' variant='outline-primary' block>Add</Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>

    )


}

export default AddTodoForm



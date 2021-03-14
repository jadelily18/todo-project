import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../css/TodoItem.css'
import axios from 'axios'

function TodoItem(props) {


    async function sendDeleteReq() {
        let csrfToken = props.getCookie('csrftoken')

        await axios.delete('http://localhost:8000/api/todo-delete/' + props.id, {
            headers: {'X-CSRFToken': csrfToken}
        })

        await props.getAllTodo()
        props.reloadPage()

    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={10}>
                        <h4>{props.title}</h4>
                    </Col>
                    <Form.Check className='todoCheck' defaultChecked={props.completed}/>
                    <Button onClick={sendDeleteReq}>Delete</Button>
                </Row>
                <p>{props.details}</p>
            </Container>
        </div>
    )

}

export default TodoItem




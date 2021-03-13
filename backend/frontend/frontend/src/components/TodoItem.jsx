import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../css/TodoItem.css'

function TodoItem(props) {


    return (
        <div>
            <Container>
                <Row>
                    <Col xs={10}>
                        <h4>{props.title}</h4>
                    </Col>
                    <Form.Check className='todoCheck' defaultChecked={props.completed}/>
                    <Button>Delete</Button>
                </Row>
                <p>{props.details}</p>
            </Container>
        </div>
    )

}

export default TodoItem




import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../css/TodoItem.css'
import axios from 'axios'

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: false,
        }

        this.sendDeleteReq = this.sendDeleteReq.bind(this)
        this.handleFormUpdate = this.handleFormUpdate.bind(this)

    }

    async sendDeleteReq(event) {
        event.preventDefault()

        let csrfToken = this.props.getCookie('csrftoken')

        await axios.delete('http://localhost:8000/api/todo-delete/' + this.props.id, {
            headers: {'X-CSRFToken': csrfToken}
        })

        await this.props.getAllTodo()
        this.props.reloadPage()

    }

    async handleFormUpdate(event) {
        let csrfToken = this.props.getCookie('csrftoken')

        await this.setState({
            completed: event.target.checked
        })

        await axios.patch('http://localhost:8000/api/todo-update/' + this.props.id, {
            "completed": this.state.completed
        }, {
            headers: {'X-CSRFToken': csrfToken}
        })

    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={10}>
                            <h4>{this.props.title}</h4>
                        </Col>
                        <Form.Check className='todoCheck' defaultChecked={this.props.completed} onChange={this.handleFormUpdate}/>
                        <Button onClick={this.sendDeleteReq}>Delete</Button>
                    </Row>
                    <p>{this.props.details}</p>
                </Container>
            </div>
        )
    }

}

export default TodoItem




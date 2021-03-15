import React from "react"
import {Button, Form} from 'react-bootstrap'
import axios from "axios";


class AddTodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            details: '',
            completed: false,
        }

        this.handleFormUpdate = this.handleFormUpdate.bind(this)
    }



    async handleFormSubmit(event) {
        event.preventDefault()
        console.log(this.state)

        this.props.closeModal()

        let csrfToken = this.props.getCookie('csrftoken')

        let request = {
            "title": this.state.title,
            "details": this.state.details,
            "completed": this.state.completed,
        }

        await axios.post('http://localhost:8000/api/todo-list-create/', request, {
            headers: {'X-CSRFToken': csrfToken}
        })
            .then((response) => {
                console.log(response)
            })

        await this.props.getAllTodo()
        this.props.reloadPage()

    }

    handleFormUpdate(event) {
        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
        console.log(this.state)
    }


    render()  {
        return (
            <Form onSubmit={(e) => this.handleFormSubmit(e)}>
                <Form.Group controlId='titleForm'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' onChange={this.handleFormUpdate} placeholder='Do.. something!'/>
                </Form.Group>
                <Form.Group controlId='descriptionForm'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='details' onChange={this.handleFormUpdate} as='textarea' rows='5' placeholder='Add a description!'/>
                </Form.Group>
                <Form.Group controlId='completedForm'>
                    <Form.Check name='completed' onChange={this.handleFormUpdate} checked={this.state.completed} label='Completed'/>
                </Form.Group>
                <Button type='submit' variant='outline-primary' block>Add</Button>
            </Form>
        )
    }

}

export default AddTodoForm


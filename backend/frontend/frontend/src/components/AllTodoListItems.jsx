import React from 'react'
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import { Container } from "react-bootstrap";
import '../css/AllTodoListItems.css'

class AllTodoListItems extends React.Component {

    state = {
        todoItems: []
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/todo-list-create')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todoItems: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Container className='todoAppContainer'>
                <h1 className='todoTitle'>Todo!</h1>
                <hr/>
                <div>
                    <Container>
                        <AddTodoForm/>
                    </Container>
                    <hr/>
                    {this.state.todoItems.map((todoItem) => (
                            <TodoItem
                                key={todoItem.id}
                                title={todoItem.title}
                                details={todoItem.details}
                                completed={todoItem.completed}
                            />
                    ))}
                </div>
                <hr/>
            </Container>
        )
    }

}

export default AllTodoListItems


import React from 'react'
import AddTodoModal from "./AddTodoModal";
import TodoItem from "./TodoItem";
import { Container } from "react-bootstrap";
import '../css/AllTodoListItems.css'
import axios from 'axios'
import jQuery from "jquery";

class AllTodoListItems extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
            reload: false
        }

        this.updateStateForReload = this.updateStateForReload.bind(this)
        this.getAllTodoItems = this.getAllTodoItems.bind(this)
        this.getCookie = this.getCookie.bind(this)
    }

    updateStateForReload() {
        this.setState(
      {reload: true},
      () => this.setState({reload: false})
        )
    }

    getCookie(name) {
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

    getAllTodoItems() {
        axios.get('http://localhost:8000/api/todo-list-create')
            .then(res => {
                this.setState({ todoItems: res.data })
            })
    }

    componentDidMount() {
        this.getAllTodoItems()
    }


    render() {
        return (
            <Container className='todoAppContainer'>
                <h1 className='todoTitle'>Todo!</h1>
                <hr/>
                <div>
                    <Container>
                        <AddTodoModal reloadPage={this.updateStateForReload} getAllTodo={this.getAllTodoItems} getCookie={this.getCookie}/>
                    </Container>
                    <hr/>
                    {this.state.todoItems.map((todoItem) => (
                            <TodoItem
                                reloadPage={this.updateStateForReload}
                                getAllTodo={this.getAllTodoItems}
                                getCookie={this.getCookie}
                                key={todoItem.id}
                                id={todoItem.id}
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


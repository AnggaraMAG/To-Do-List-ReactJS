import React, { Component } from 'react'
import List from './List';

class todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            todoitems: '',

        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            //menggunakan concat untuk menggabung data yg diinput
            items: this.state.items.concat([this.state.todoitems]),
            //menggunakan sphread untuk menggabung data yg diinput
            // items: [...this.state.items]

            //untuk mengkosongkan inputnya
            todoitems: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            todoitems: e.target.value
        })

        console.log(this.state.todoitems)
    }

    render() {
        return (
            <div>
                <h3>To Do List</h3> <hr />
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todoitems} onChange={this.handleChange} />
                    <button>add</button>
                </form>
                {/* buat props nya yaitu custome items lalu buat file terpisah */}
                <List ucok={this.state.items} />
            </div>
        )
    }

}
export default todolist;

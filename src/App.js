import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
// import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            <span><strong>Apa yang anda pikirkan?</strong></span><br></br>
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            List to #{this.state.items.length + 1}
          </button>
          <Button variant="secondary">Button</Button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    );
  }
}

export default App

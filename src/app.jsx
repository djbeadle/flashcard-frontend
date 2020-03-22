import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

class App extends React.Component {	
  render() {
    return (
    <div className="App">
      <form action="http://localhost:5000/flashcards/" method="post" class="form-example">
      <div class="form-example">
        <label for="title">Enter a title: </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div class="form-example">
        <label for="description">Enter a description: </label>
        <input type="text" name="description" id="description" required />
      </div>
        <div class="form-example">
            <input type="submit" value="Submit" />
          </div>
      </form>
    </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web !
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HtML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">Javascript</a></li>
        </ul>
    </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
      <h2>HTML</h2>
      HTML is HyperText Markup Language.
  </article>
    );
  }
}


function App() {
  return (
    <div className="App">
      <Subject></Subject>
      <TOC></TOC>
      <Content></Content>
    </div>
  );
}

export default App;

//Dependencies
import React, { Component } from 'react';
//Internals
import './styles.css';
const words = ['songs', 'bands', 'music', 'artists'];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }

  render() {
    const index = this.state.index % words.length;
    const word = words[index];
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          <h1>Favorite Artists</h1>
        </div>
        <div className="middle-page">
          <p>Share your favorite <span className="changing-word">{word}</span>.</p>
        </div>
      </div>
    );
  }
}

export default NavBar;

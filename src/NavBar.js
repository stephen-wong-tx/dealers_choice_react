import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (
      <div id="nav">
        <ul id="sourceInfo">
          <li>Project by Stephen Wong at Full Stack Academy</li>
          <li className="right"><span>Data Source:<a href="https://www.14ers.com/" target="_blank">14ers.com</a></span></li>
        </ul>
        <ul>
          <li className="link right"><a className="active" href="https://github.com/stephen-wong-tx/dealers_choice_react" target="_blank">About</a></li>
          <li id="icon"><a href="/"><img src="./fourteeners-home-alt.png" alt="The number 14 in front of a mountain range drawing" /></a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import MainContent from './MainContent';
import SingleRange from './SingleRange';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRanges: [],
      selectedRange: ''
    }
  }
  async componentDidMount() {
    const allRanges = ( await axios.get(`api/ranges`) ).data;
    this.setState( { allRanges });
    window.addEventListener('hashchange', () => {
      this.setState({ selectedRange: window.location.hash.slice(1)});
    });
    this.setState({ selectedRange: window.location.hash.slice(1)});
  }
  render() {
    const { selectedRange } = this.state;
    return (
      <div id="parent-main-content">
        {
          <NavBar />
        }
        <div className='wrapper'>
          {
            selectedRange.length > 0 ? (
              <SingleRange range={ selectedRange }/>
            ) : (
              <MainContent allRanges={ this.state.allRanges } />
            )
          }
        </div>
      </div>
    )
  }
}

// export default Main;

        // <div id='main-content'>
        //   <h1>The Fourteeners</h1>
        //   <h2>This is my project!!</h2>

        // </div>
import React, { Component } from 'react';
import axios from 'axios';
import Peak from './Peak';
import RangeHero from './RangeHero';
import SinglePeak from './SinglePeak';

// Note for Code Reviewer: Do you recommend how I could keep some of the code between lines 16-32 DRY? 

class SingleRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: {},
      sampleMountain: {},
      selectedPeak: ""
    }
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.range !== this.props.range) {
      const range = ( await axios.get(`/api/ranges/${this.props.range}`) ).data;
      this.setState({ range })
      const randomIdx = () => Math.floor(Math.random() * this.state.range.mountains.length);
      let sampledMountain = this.state.range.mountains[randomIdx()];
      this.setState({ sampleMountain: sampledMountain })
    }
  }
  async componentDidMount(prevProps) {
    console.log('SINGLE RANGE CURRENT PROPS:', this.props);
      const range = ( await axios.get(`/api/ranges/${this.props.range}`) ).data;
      this.setState({ range })
      const randomIdx = () => Math.floor(Math.random() * this.state.range.mountains.length);
      let sampledMountain = this.state.range.mountains[randomIdx()];
      this.setState({ sampleMountain: sampledMountain })
  }
  render() {
    const { range } = this.state;
    const { selectedPeak } = this.state;
    const { mountains } = range;
    
    if( mountains !== undefined ) {
      return (
        <div id="indiv-body">
          {
            <RangeHero sampleMountain={ this.state.sampleMountain } />
          }
          <div className="rangePeaksContainer">
            <ul id="peak-list">
              {
                mountains.map( mountain => {
                  return (
                      <li key={ mountain.ID } 
                        className="peak" 
                        onClick={() => {
                          this.setState({ selectedPeak: mountain });
                          window.location.replace("/#SinglePeak")
                        }
                        }>
                        <h2>
                          <i className="fas fa-mountain"></i>
                          <br />
                          { mountain["Mountain Peak"] }
                        </h2>
                      </li>
                  )
                })
              }    
            </ul>
          </div>
          {
            !!selectedPeak && <SinglePeak selectedPeak={ selectedPeak } />
          }
        </div>
      )
    }
    return <p><a href="/">Go back home</a></p>
  }
}

export default SingleRange
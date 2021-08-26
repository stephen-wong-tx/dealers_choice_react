import React, { Component } from 'react';
import axios from 'axios';
import Peak from './Peak';
import RangeHero from './RangeHero';

class SingleRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: {},
      sampleMountain: {}
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
    const { mountains } = range;
    
    if( mountains !== undefined ) {
      return (
        <div id="indiv-body">
          {
            <RangeHero sampleMountain={ this.state.sampleMountain } />
          }
          <div className="wrapper">
            <h3>{ range.Name }</h3>
            <h4>Rendered Mountains:</h4>
            {
              mountains.map( mountain => {
                return (
                  <Peak peak={ mountain } key={ mountain.ID } />
                )
              })
            }    
          </div>
        </div>
      )
    }
    return <p>Test</p>
  }
}

export default SingleRange
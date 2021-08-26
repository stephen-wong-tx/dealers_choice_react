import React, { Component } from 'react';
import axios from 'axios';
import Peak from './Peak';

class SingleRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: {}
    }
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.range !== this.props.range) {
      console.log('NEW PROPS:', this.props)
      console.log('OLD PROPS:', prevProps)
      const range = ( await axios.get(`/api/ranges/${this.props.range}`) ).data;
      this.setState({ range })
    }
  }
  async componentDidMount(prevProps) {
    console.log('SINGLE RANGE CURRENT PROPS:', this.props);
      const range = ( await axios.get(`/api/ranges/${this.props.range}`) ).data;
      this.setState({ range })
  }
  render() {
    const { range } = this.state;
    const { mountains } = range;
    if( mountains !== undefined ) {
      return (
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
      )
    }
    return <p>Test</p>
  }
}

export default SingleRange
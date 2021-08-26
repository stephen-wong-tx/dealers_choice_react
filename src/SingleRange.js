import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <h3>{ range.Name }</h3>    
    )
  }
}

export default SingleRange
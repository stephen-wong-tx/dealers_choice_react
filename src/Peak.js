import React, { Component } from 'react';

class Peak extends Component {
  render() {
    const { peak } = this.props;
    console.log("mounting individual peak props:", peak)
    return(
      <div className="entryContainer" key={ peak.ID }>
        <h2>{ peak["Mountain Peak"] }</h2>
        <div id={ `button-${peak.ID}` } className="details-container">
          <a href={ `#${peak.ID}` }>See details</a>
        </div>
      </div>
    )
  }
}

export default Peak
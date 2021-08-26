import React, { Component } from 'react';
import Range from './Range';

class MainContent extends Component {
  render() {
    const { allRanges } = this.props;
    console.log('LOGGING PROPS!!' , allRanges)
    return (
      <div id="main-content">
      <h1>The Fourtneeners</h1>
      <h2>Made With React</h2>
      <p className="description"> Fourteener fȯr-ˈtēn-ər<br /> A mountain peek with an elevation of at least 14,000 ft (4267 m).</p>
        <div id="entry-list">
           
            <div className="entryContainer">
              <h2>The Best Mountain Range Ever</h2>
              <div id="button-best" className="details-container"><a href="/mountains/best">See details</a></div>
            </div>
            <h3>Rendered Mountains:</h3>
            { allRanges.map( range => 
              <div className="entryContainer" key={ range.ID }>
                <h2>{range["Name"]}</h2>
                <div id={ `button-${range.ID}` } className="details-container">
                  <a href={ `#${range.ID}` }>See details</a>
                </div>
              </div>  
            ) }
            
          
        </div>
      </div>
    )
  }
}

export default MainContent 

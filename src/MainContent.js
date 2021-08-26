import React, { Component } from 'react';
import Range from './Range';
import MainHeading from './MainHeading';

class MainContent extends Component {
  render() {
    const { allRanges } = this.props;
    console.log('Mounting Props to MainContent.props:' , allRanges)
    return (
      <div id="main-content">
        {
          <MainHeading />
        }
        <div id="entry-list">
            <div className="entryContainer">
              <h2>The Best Mountain Range Ever</h2>
              <div id="button-best" className="details-container"><a href="/mountains/best">See details</a></div>
            </div>
            <h3>Rendered Mountains:</h3>
            { allRanges.map( range => {
               return (
                <Range range={ range } key={ range.ID } /> 
               )
             })
            }
        </div>
      </div>
    )
  }
}

export default MainContent 

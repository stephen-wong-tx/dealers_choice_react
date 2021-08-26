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

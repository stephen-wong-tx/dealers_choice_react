import React, { Component } from 'react';

class Range extends Component {
  render() {
    const { range } = this.props;
    console.log("mounting individual Range props:", range)
    return(
      <div className="entryContainer" key={ range.ID }>
        <h2>{ range["Name"] }</h2>
        <div id={ `button-${range.ID}` } className="details-container">
          <a href={ `#${range.ID}` }>See details</a>
        </div>
      </div>
    )
  }
}

// const Range = () => {
//   const { range } = this.props;
//   console.log("mounting individual Range props:", range)
//   return ( 
//     <div className="entryContainer" key={ range.ID }>
//       <h2>{ range["Name"] }</h2>
//       <div id={ `button-${range.ID}` } className="details-container">
//         <a href={ `#${range.ID}` }>See details</a>
//       </div>
//     </div>
//   )
// }

export default Range
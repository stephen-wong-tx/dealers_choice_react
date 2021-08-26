import React from 'react';

const Range = props => {
  const { ID } = props;
  return (
    <div className="entryContainer" key={ ID }>
      <h2>{ props["Name"] }</h2>
      <div id={ `button-${ID}` } className="details-container">
        <a href={ `#${ID}` }>See details</a>
      </div>
    </div>
  )
}

export default Range
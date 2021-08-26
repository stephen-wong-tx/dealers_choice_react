import React, { Component } from 'react';

class SinglePeak extends Component {
  render() {
    const { selectedPeak } = this.props;
    return (
      <div id="SinglePeak">
        <div id="single-hero">
          <h2>{ selectedPeak["Mountain Peak"] }</h2>
        </div>
        <div className="indiv-entry-container">
          <ul>
            <li>Elevation: { selectedPeak.Elevation_ft }</li>
            <li>Difficulty: { selectedPeak.DifficultyDescription }</li>
            <li>Standard Route: { selectedPeak["Standard Route"] }</li>
            <li>Hiking Distance: { selectedPeak.Distance_mi }</li>
            <li>Elevation gain: { selectedPeak["Elevation Gain_ft"] }</li>
            <li>Traffic Low: { selectedPeak["Traffic Low"] }</li>
            <li>Traffic High: { selectedPeak["Traffic High"] }</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SinglePeak
      //   <div class="indiv-entry-container">
      //   <p class="indiv-subheading"><strong>${entry["Mountain Peak"]}</strong></p>
      //   <p>Range: <strong>${entry["Mountain Range"]}</strong></p>
      //   <p>Elevation: <strong>${entry.Elevation_ft}</strong></p>
      //   <ul>
      //   </ul>
      // </div>
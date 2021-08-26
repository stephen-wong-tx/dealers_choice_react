import React, { Component } from 'react';

class RangeHero extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const { sampleMountain } = this.props
    console.log('TESTING HERO PROPS: ', sampleMountain)
  }
  render() {
    const { sampleMountain } = this.props
    return (
      <div id="hero"
        style={
          {
            backgroundImage: `url(` + `${sampleMountain.photo}` + `)`
          }
        }
      >
        <h1 className="h3" style={{ textTransform: 'uppercase'}}>Selected Range:{ sampleMountain['Mountain Range'] }</h1>
        <h2>BACKGROUND PHOTO FROM RANDOM PICK: { sampleMountain['Mountain Peak'] }</h2>
      </div>
    )
  }
}
export default RangeHero
// return (
//   <div 
//     id="hero" 
//     style={{
//       backgroundImage: `url(` + `${sampleMountain.photo}` + `)`
//     }}>
//     <h1 className="h3">Range: { sampleMountain["Mountain Range"].toUpperCase() }</h1>
//   </div>   
// )
import React from 'react'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    breed: React.PropTypes.string.isRequired,
    superpower: React.PropTypes.string,
    age: React.PropTypes.string,
    country: React.PropTypes.string,
    image: React.PropTypes.string
  },

  render () {
    return (
      <div className="dog-wrapper">
        <div className="dog">
          <div className="dog-name-plate">
            <span className="dog-name">{this.props.name}</span>
            <span className="dog-breed">{this.props.breed}</span>
            <span className="dog-country">{this.props.country}</span>
          </div>
          <span className="dog-superpower">{this.props.superpower}</span>
          <span className="dog-age">{this.props.age}</span>
        </div>
        <div className="dog-pic">
          <img className="dog-img" src={this.props.image}/>
        </div>
    </div>
    )
  }
})

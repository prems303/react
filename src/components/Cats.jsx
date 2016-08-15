import React from 'react'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    breed: React.PropTypes.string.isRequired,
    age: React.PropTypes.string,
    superpower: React.PropTypes.string,
    country: React.PropTypes.string,
    image: React.PropTypes.string
  },

  render () {
    return (
      <div className="cat-wrapper">
        <div className="cat">
          <div className="cat-name-plate">
            <span className="cat-name"> {this.props.name} </span>
            <span className="cat-breed"> {this.props.breed} </span>
              <span className="cat-country">{this.props.country}</span>
          </div>
          <span className="cat-age"> {this.props.age} </span>
        </div>

          <div className="cat-pic">
            <img className="cat-img" src={this.props.image}/>
          </div>


      </div>
    )
  }
})

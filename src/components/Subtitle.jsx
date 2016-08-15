import React from 'react'

const EmphasisedLink = props => <h2>{props.text}</h2>
EmphasisedLink.propTypes = {
  text: React.PropTypes.string.isRequired
}
export default EmphasisedLink

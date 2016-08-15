import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'
import Cats from './Cats.jsx'

export default React.createClass({
  render () {
    return (
      <div className="container">
        <img className="spinner" src="images/paw.png" />
        <Subtitle text="Canines using supercanine abilities for social good."/>
        <Subtitle text="(And cats as well)"/>
        <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" age="12" country="New Zealand" image="images/bulldog.png"/>
        <Cats name="Bob" breed="Tabby" age="8" superpower="can fly" country="New Zealand" image="images/cat_2.png"/>
      </div>
    )
  }
})

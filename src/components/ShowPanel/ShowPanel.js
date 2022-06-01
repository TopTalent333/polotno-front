import React from 'react'

import './ShowPanel.css'

const ShowPanel = props => {
  const {number, description} = props;

  return (
    <section className="ShowPanel">
      <div className="Description">{description}</div>
      <div className="Number">{number}</div>
    </section>
  )
}

export default ShowPanel

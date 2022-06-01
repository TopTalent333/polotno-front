import React from 'react'

import './Context.css'

const Context = props => {
  const {title, description} = props;

  return (
    <section className="Context">
      <div className="Title">{title}</div>
      <div className="Description">{description}</div>
    </section>
  )
}

export default Context

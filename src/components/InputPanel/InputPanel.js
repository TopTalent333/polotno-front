import React from 'react'

import './InputPanel.css'

const InputPanel = props => {
  const {placeholder, title, description} = props;

  const [value, setValue] = React.useState(placeholder);

  const onChange = (e) => {
    setValue(e.value);
    console.log(value);
  }

  return (
    <section className="InputPanel">
      <div className="Title">
        <div>{title}</div>
        <div className="Description">{description}</div>
      </div>
      <div className="Input-Wrapper">
        <input className="Input" placeholder={placeholder} onChange={onChange}></input>
      </div>
    </section>
  )
}

export default InputPanel

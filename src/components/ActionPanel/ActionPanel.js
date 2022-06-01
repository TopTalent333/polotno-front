import React from 'react'
import { useDispatch } from 'react-redux';

import './ActionPanel.css'
import {headerActions} from '../../actions';
const ActionPanel = props => {
  const {title, actiontitle, actionType} = props;
  // const [value, setValue] = React.useState(placeholder);
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(headerActions.headerUpdateTrigger(actionType));
  }

  const setBNBAmount = (e) => {
    dispatch(headerActions.updateBNBAmount(e.target.value));
  }

  return (
    <section className="ActionPanel">
      <div className="Title">
        <div>{title}</div>
        {
          actionType == 1 &&
          <input type='number' onChange={setBNBAmount} placeholder='[Amount]' style={{width: '70px', marginLeft: '10px'}}/>
        }
      </div>
      <div className="LeftWrapper">
        <button className="Button" onClick={onClick}>{actiontitle}</button>
      </div>
    </section>
  )
}

export default ActionPanel

import React from 'react'
import Check from '../assets/icon-check.svg'

function PlansList(props){
  const list = props.itemList
  return list.map((item,index) => <li key={index}><img src={Check}/>{item}</li>)
}

function Plans(props){
  return(
    <div>
      <img src={props.topIcon} alt="Icon on top of the plan box" />
      <h4>{props.title}</h4>
      <p>{props.upperText}</p>
      <p><b>{props.pricing}</b>{props.planInstallment}</p>
      <ul>
        <PlansList itemList={props.items}/>
      </ul>
    </div>
  )
}



export default Plans
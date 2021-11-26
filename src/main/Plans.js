import React from 'react'
import Check from '../assets/icon-check.svg'

function PlansList(props){
  const list = props.itemList
  return list.map((item,index) => <li key={index}><img className="filtered" src={Check}/>{item}</li>)
}

function Plans(props){
  return(
    <div className={`plans-card ${props.name}`}>
      <img className="plans-icon" src={props.topIcon} alt="Icon on top of the plan box" />
      <h4 className="subtitle">{props.title}</h4>
      <p className="regular-text">{props.upperText}</p>
      <p className="title">{props.pricing}<em>
        {props.planInstallment}</em></p>
      <ul>
        <PlansList itemList={props.items}/>
      </ul>
    </div>
  )
}



export default Plans
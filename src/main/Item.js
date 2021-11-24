import React from 'react'

function Item(props){
  return(
    <div>
      <img src={props.image} alt="Item image" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default Item
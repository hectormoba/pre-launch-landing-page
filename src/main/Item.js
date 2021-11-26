import React from 'react'

function Item(props){
  return(
    <div className="item-container display-flex">
      <figure className="image-container display-flex">
      <img className={`image-${props.name} image`} src={props.image} alt="Item image" />
      </figure>
      <h4 className="subtitle">{props.title}</h4>
      <p className="regular-text">{props.text}</p>
    </div>
  )
}

export default Item
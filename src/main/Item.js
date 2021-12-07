import React from 'react'

function Item(props){
  return(
    <div className="item-container display-flex">
      <figure className="image-container">
      <img className={`image-${props.name} image`} src={props.image} alt="Item image" />
      </figure>
      <div className="item-text-container">
        <h3 className="subtitle">{props.title}</h3>
        <p className="regular-text">{props.text}</p>
      </div>
    </div>
  )
}

export default Item
import React from 'react'

function Header(props){
  return(
    <header>
     <img src={props.logo} alt="logo" />
     <h1>maker</h1>
    </header>
  )
}

export default Header
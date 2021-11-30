import React from 'react'

function Header(props){
  return(
    <header className="header">
     <img className="header-image" src={props.logo} alt="logo" />
    </header>
  )
}

export default Header
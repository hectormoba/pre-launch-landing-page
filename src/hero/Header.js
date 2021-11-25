import React from 'react'

function Header(props){
  return(
    <header className="header display-flex">
     <img className="header-image" src={props.logo} alt="logo" />
    </header>
  )
}

export default Header
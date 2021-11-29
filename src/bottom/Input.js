import React, {Component} from 'react'

class Input extends Component {
  state = {
    input: '',
    message: ['Oops! Please add your email', 'Oops! That doesn’t look like an email address'],
    valid: true
  }

  handleChange = (event) =>{
    this.setState({input: event.target.value})
  }
  
  verifyEmail = () =>{
    const validator = /(\w+)@(\w+).(com|es|org|net)$/i
    const {input} = this.state
    if(input.length === 0) {
      this.setState({valid: false})
    }
    if(!validator.test(input)) {
      this.setState({valid: false})
    }
    if(validator.test(input)) {
      this.setState({valid: true})
    }
  }

  render(){
    const {input, message, valid} = this.state
    let inputClass = 'input'
    let errorMessage = <p></p>
    if(!valid && input.length === 0) {
      errorMessage = <p className="error">{message[0]}</p>
      inputClass += ' onError'
    } else if(!valid){
      errorMessage = <p className="error">{message[1]}</p>
      inputClass += ' onError'
    } else if(valid) {
      errorMessage = null
      inputClass = 'input'
    }
    return(
      <form className="bottom-form display-flex globalpadding">
        <h2 className="title">Get notified when we lauch</h2>
        <input className={inputClass} placeholder='Email address' value={input} onChange={this.handleChange} type='text' />
        {errorMessage}
        <input className="button"value='Get notified' type='button' onClick={this.verifyEmail}/>
      </form>
    )
  }
}

export default Input
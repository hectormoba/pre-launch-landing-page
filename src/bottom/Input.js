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
    let errorMessage
    if(!valid && input.length === 0) {
      errorMessage = message[0]
    } else if(!valid){
      errorMessage = message[1]
    } else if(valid) {
      errorMessage = null
    }
    return(
      <form>
        <h2>Get notified when we lauch</h2>
        <input placeholder='Email address' value={input} onChange={this.handleChange} type='text' />
        {errorMessage}
        <input value='Get notified' type='button' onClick={this.verifyEmail}/>
      </form>
    )
  }
}

export default Input
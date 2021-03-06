import React from 'react'
import {addPersona} from '../actions/addPersona'

import {connect} from 'react-redux'



class PersonaInput extends React.Component {

  state = {
    first_name: '',
    last_name: '', 
    dob: null, 
    sex: '', 
    race: '', 
    notes: '', 
    member_id: null , 
    faction_id: null
  };

handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    alert('what have you done?')
    this.props.addPersona(this.state)
    this.setState({
        first_name: '',
        last_name: '', 
        dob: '', 
        sex: '', 
        race: '', 
        notes: '', 
        member_id: '' , 
        faction_id: ''
    })

  };

  render () {
    return(
      <div>
        
        <h2>Create a new Persona</h2>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>{' '}
          <span><input type='text' placeholder='First Name' value={this.state.first_name} name='first_name' onChange={this.handleChange} />{' '}
          <label>Last Name</label>{' '}
          <input type='text' placeholder='Last Name' value={this.state.last_name} name='last_name' onChange={this.handleChange} /><br/></span>
          <span>
          <label>Date of Birth</label>{' '}
          <input type='date' placeholder='Date of Birth' value={this.state.dob} name='dob' onChange={this.handleChange} />{' '}
          <label>Sex</label>{' '}</span>
          <span>
          <input type='text' placeholder='Sex' value={this.state.sex} name='sex' onChange={this.handleChange} />{' '}
          <label>Race</label>{' '}
          <input type='text' placeholder='Race' value={this.state.race} name='race' onChange={this.handleChange} />{' '}
          <label>Notes</label>{' '}</span><br/>
          <input type='textarea' placeholder='Notes' value={this.state.notes} name='notes' onChange={this.handleChange} />{' '}
          <br/>
          <span><label>Select Member</label>{' '}
          <select value={this.state.value} name='member_id' onChange={this.handleChange}>
            <option value="0">Select member:</option>
            <option value="1">brendo</option>
            <option value="2">fussler</option>
            <option value="3">certru</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
          </select>
          {' '}
          <label>Select Faction</label>{' '}
          <select name='faction_id' value={this.state.value} onChange={this.handleChange}>
            <option value="0">Select Faction:</option>
            <option value="1">cops</option>
            <option value="2">robbers</option>
            <option value="3">taxi</option>
            <option value="4">none</option>
          </select>
          {' '}
          </span>
          <br/>
          <input type='submit' />
        </form>
        <br/>
      
      </div>

    )
  }

}

export default connect(null, {addPersona})(PersonaInput)

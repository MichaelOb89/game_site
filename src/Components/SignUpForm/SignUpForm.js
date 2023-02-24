import { Component } from 'react'
import { signUp } from '../../utilities/users-service'


export default class SignUpForm extends Component {
    state = {
        userName: '', //required
        password: '', //required
        confirm: ''
    }

    handleSubmit = async (evt) => {
      evt.preventDefault()
      try {
        const formData = { ...this.state }
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch (error) {
        console.log(error);
        this.setState({ error: 'Sign Up Failed' })
      }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div>
              <form 
              autoComplete="off" 
              onSubmit={this.handleSubmit}
              >
                <section>
                <label >Username: <span></span></label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required /><br/>
                <label>Password: <span></span></label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br/>
                <label>Confirm: <span></span></label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                </section>
                <div>
                  <button 
                    type="submit" 
                    disabled={disable}
                    >SIGN UP
                    &nbsp;
                  </button>
                </div>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}
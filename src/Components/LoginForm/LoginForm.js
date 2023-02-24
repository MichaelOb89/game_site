import { useState } from 'react'
import * as userService from '../../utilities/users-service'

export default function LoginForm ({ setUser }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    console.log("handleSubmit");
    evt.preventDefault()
    try {
      console.log("user1");
      const user = await userService.login(credentials)
      console.log("user2");
      console.log("user",user);
      setUser(user)
    } catch (error) {
      console.log("user3",error.message);
      setError(error.message)
    }
  }

  return (
    <div>
      <div>
        <form 
        autoComplete='off' 
        onSubmit={handleSubmit}
        >
          <label>Username: </label>
          <input type='username' name='username' value={credentials.username} onChange={handleChange} required /> 
          &nbsp;
          <label>Password: </label>
          <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          <div>
            <button type='submit'>LOG IN
            &nbsp;
            </button>
          </div>
        </form>
      </div>
      <h1 className='error-message'>&nbsp;{error}</h1>
    </div>
  )
}
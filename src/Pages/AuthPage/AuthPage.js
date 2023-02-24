import { useState } from "react"
import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"
import * as userService from '../../utilities/users-service'

export default function AuthPage({setUser}){
    const [login, setLogin] = useState(false)
    const changeForm = () => {
        setLogin(!login)
    }
    const loginGuest = async () => {
        try {
            const user = await userService.login({
                username: "Guest",
                password: "123456"
            })
            setUser(user)
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>{login?
            <>
                <LoginForm setUser={setUser}/>
                <h2 onClick={changeForm}>Click here to Sign Up a new User</h2>
                
            </>
        :
            <>
                <SignUpForm setUser={setUser}/>
                <h2 onClick={changeForm}>Click here to Login a existing user</h2>
                
            </>}
            <h2 onClick={loginGuest}>Click here to continue as a guest</h2>
        </>
    )
}
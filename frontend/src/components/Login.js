import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FormInput from '../form-elements/FormInput';


function Login(props) {
    const auth = useContext(AuthContext);
    return (
    <div >
            <h1>Login</h1>
            <FormInput 
            type = 'text'
            label = 'Username'
            id = 'username'
            value = {auth.username}
            onChange = {e => {
                auth.update('username', e.target.value);
            }}
            />
            <FormInput 
            type='text'
            label='Password'
            id='password'
            value={auth.password}
            onChange = {e => {
                auth.update('password', e.target.value)
            }}
            
            />
            <button onClick={()=>{
                auth.signin(auth.username, auth.password);
            }} > Sign In </button>
    </div>
    )
}

export default Login;



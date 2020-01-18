import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FormInput from '../form-elements/FormInput';
import AuthViewer from '../components/AuthViewer'


function Login(props) {
    const auth = useContext(AuthContext);
    console.log(auth);

    // being logged in = i have a token

    return <div> <AuthViewer invert={true}>
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
            }}></FormInput>
              <FormInput
          type='text'
          label='Email'
          id='email'
            value={auth.email}
            onChange = {e => {
                auth.update('email', e.target.value)
            }}
           ></FormInput>
            
            <FormInput
                type='text'
                label='Role'
                id='role'
                value={auth.roleEntry}
                onChange={e => {
                    auth.update('roleEntry', e.target.value)
                }}

            ></FormInput>
            <button className='btn btn-success' onClick={()=>{
                auth.signin(auth.username, auth.password);
            }} > Sign In </button>
            <button className='btn btn-success' onClick={() => {
                auth.signup(auth.username, auth.password, auth.email, auth.roleEntry);
            }} > Sign Un </button>
            </div> 
            </AuthViewer>
            <AuthViewer >
            <button onClick= {()=>
           {
                auth.clear();
           }}
            >Log Out</button>
            </AuthViewer >
    </div>
}

export default Login;



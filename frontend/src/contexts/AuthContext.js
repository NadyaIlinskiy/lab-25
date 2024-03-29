import React, {useState} from 'react';
import fetch from 'node-fetch';

export const AuthContext = React.createContext();

function AuthProvider(props){
const [state, setState] = useState( {
    username: '',
    password: '',
    email:'',
    token:'',
    role:'',
    update:(key, val) => {
        setState(state => {
            let newState = {...state};
            newState[key]= val;
            return newState;
        })
    },
    signin: async (username, password) => {

        const basicAuth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

        //http request
        const api = 'http://localhost:3000/signin';

        let response = await fetch (api, {
            method: 'POST',
            headers: {
                Authorization: basicAuth,
            },
        });

        let body = await response.json();
        console.log(body);

        setState(state => ({
            ...state,
            token: body.token,
            role: body.role,
            password: '',
        }));
    }
});
 
   

 return <AuthContext.Provider value={state}>
     {props.children}
     </AuthContext.Provider>
}

export default AuthProvider;
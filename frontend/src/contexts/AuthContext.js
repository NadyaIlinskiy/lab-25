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
    roleEntry: '',
    update:(key, val) => {
        setState(state => {
            let newState = {...state};
            newState[key]= val;
            return newState;
        })
    },
    clear:() =>{
       setState({...state});
    },
    signin: async (username, password) => {

        const basicAuth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

        //http request
        const api = 'https://js401n14-lab25.herokuapp.com/signin';

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
    },
 
    signup: async (username, password, email, role) => {

        const basicAuth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

        //http request
        const api = 'https://js401n14-lab25.herokuapp.com/signup';
        const body ={
            username: username,
            password: password,
            email: email,
            role: role
        };

        let response = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        let json = await response.json();
        console.log(json);

        setState(state => ({
            ...state,
            token: body.token,
            role: body.role,
            password: '',
        }));
    }, getBooks: async token => {
        //http request
        const api = 'https://js401n14-lab25.herokuapp.com/books';

        let response = await fetch(api, {
            method: 'GET',
            headers: {
                Authorization: token
            },
        });

        let json = await response.json();
        console.log(json);

      return json;
    },
    addBook: async (title, author, roles, token)=> {
        const api = 'https://js401n14-lab25.herokuapp.com/books';
        const body = {
            title: title,
            author: author,
            auth: roles
        };
        let response = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
        });
        let json = await response.json();
        console.log(json);
        return json;
    }
});
 
   

 return <AuthContext.Provider value={state}>
     {props.children}
     </AuthContext.Provider>
}

export default AuthProvider;
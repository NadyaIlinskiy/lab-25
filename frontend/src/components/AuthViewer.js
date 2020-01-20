import React, {useContext} from 'react';
import { AuthContext } from './../contexts/AuthContext'

function AuthViewer(props){

 const auth = useContext(AuthContext);
 
 let shouldShow = auth.token !== '';


 if(props.role) shouldShow &= auth.role === props.role;

 if (props.invert) shouldShow =! shouldShow;

return shouldShow ? <div>{props.children}</div>: '';

}

export default AuthViewer;
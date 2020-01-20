import React, { useContext, useState } from 'react';
import FormInput from './../form-elements/FormInput';
import { AuthContext } from './../contexts/AuthContext';
import books from './BookViewer'

function BookAdder(props){
    const auth = useContext(AuthContext);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [roleEntry, setRoleEntry] = useState('');

    return <div>
        <h2>Add a Book</h2>
        <label> Title </label>   <FormInput  type='text' id='title' value={title} onChange={ e => {
            setTitle(e.target.value);
        }} />      
        <label> Author </label><FormInput type='text' id='Author' value={author} onChange={e => {
            setAuthor(e.target.value);
        }} />  
        <label> Select Role </label>
            <select
                id="role"
                value={roleEntry}
                onChange={e => {
                    setRoleEntry(e.target.value);
                }}
            >
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="user">User</option>
            </select>
           
     
        <button 
        onClick = {() => {
            let role = [];
            if (roleEntry === 'user')
                role = ['user','editor', 'admin'];
            if(roleEntry === 'editor')
                role = ['editor', 'admin'];
            if(roleEntry === 'admin')
                role =['admin']               
                let token = auth.token;
             auth.addBook(title, author, role, token);
               auth.getBooks(token);
        }} > Add Book </button>
    </div>
}

export default BookAdder;
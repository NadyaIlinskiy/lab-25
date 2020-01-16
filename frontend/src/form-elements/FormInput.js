import React from 'react'

function FormInput(props) {
        return(
            <div>
                <label>{props.label}</label>
                <input 
                    type = {props.type}
                    id = {props.id}
                    value = {props.value}
                    onChange = {props.onChange}
                />
            </div>
        );
}

export default FormInput;
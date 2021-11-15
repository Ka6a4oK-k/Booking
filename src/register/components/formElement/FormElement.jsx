import React from 'react'

export default function FormElement(props) {
    return (
        <div>
            <div className="regiser_form-element">
                <span>{props.text}</span>
                <input type="text" name={props.inputName} onChange={props.handleChange} onBlur={props.validateName} ></input>
            </div>
            {!props.isValid && <p className='form-element-error'>{props.errorText}</p>}
        </div>
    )
}

FormElement.defaultProps = {
    onBlur: () => {}
}

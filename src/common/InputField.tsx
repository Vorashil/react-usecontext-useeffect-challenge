import {createRef, useRef} from "react";

type InputFieldProps = {
    type: string,
    placeholder: string,
    value: string,
    onChangeHandler: (inputValue: string)=> void,
}
export default function InputField({type, placeholder, value, onChangeHandler}: InputFieldProps ) {
    console.log('rendered ' + placeholder )
    return (
        <input
            className={"my-2 p-2 min-w-96 border-2 rounded-md border-blue-400"}
            type={type}
            onChange={(e: any) => {
                console.log(e.target.value)
                onChangeHandler(e.target.value)
                console.log(value)
            }}
            value={value}
            placeholder={placeholder}/>
    )
}
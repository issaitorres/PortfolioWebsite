import { useRef } from "react"
import "./FormInput.css"


const FormInput = (props) => {
    const { label, onChange, id, needtextarea, ...inputProps } = props
    const inputField = useRef(null);
    const textarea = needtextarea ? true : false

    return (
        <div className="formInput">
            <label>{label}</label>
            {
                textarea
                    ?
                        <textarea
                            ref={inputField}
                            onChange={onChange}
                            rows={4}
                            {...inputProps}
                        />
                    :
                        <input
                            ref={inputField}
                            onChange={onChange}
                            {...inputProps}
                        />
            }

        </div>
    )
}

export default FormInput
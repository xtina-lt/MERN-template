import React, {useState} from 'react'

const Test = ({setHeader}) => {
    setHeader("Test")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div>
            <h2>
                Login
            </h2>
            {errors && <span className='accent'>{errors}🧁</span>}
            <form onSubmit = {handleSubmit}>
                {/* email */}
                <label>
                    Email:
                    <input type='text' onChange={ e => setEmail(e.target.value) }/>
                </label>
                {/* password */}
                <label>
                    Password:
                    <input type='password' onChange={ e => setPassword(e.target.value) } />
                </label>
                <input type='submit' value='Submit'/>
            </form>
        </div>
        <div>
            <table>
                <tr>
                    <th>
                        test
                    </th>
                </tr>
                <tr>
                    <td>
                        test
                    </td>
                </tr>
                <tr>
                    <td>
                        test
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default Test
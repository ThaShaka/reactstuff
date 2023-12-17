import React, {useState} from 'react'

const SignUp = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword : "",
        newsletter: false,
    })

    function handleData(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevData => {return {
            ...prevData,
            [name] : type === "checkbox" ? checked : value
        }})
    }

    function handleSubmit(event) {
        event.preventDefault();
        formData.password===formData.confirmPassword ? console.log("Passwords match") : console.log("Passwords do not match")
        {formData.newsletter && console.log("Thanks for signing up to ours newsletter!")}
    }


    return (
    <div className="form-container">
            <form className="form" onSubmit={handleSubmit} >
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleData}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleData}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleData}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleData}
                        checked={formData.newsletter}
                        name="newsletter"
                        value={formData.newsletter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUp
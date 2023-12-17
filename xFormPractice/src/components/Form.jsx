import  {useState} from 'react'

const Form = () => {

    const [person, setPerson] = useState({
        firstName: "",
        lastName : "",
        email : "",
        comment : "",
        isFriendly : true,
        employment: "",
        favColor : ""
    })
    function handleChange(event) {
        const {name, value, type, checked}= event.target;
        setPerson(prevPerson => {return {
                ...prevPerson,
                [name] : type==="checkbox" ? checked : value
        
        }})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(person)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input name='firstName' type="text" placeholder='First name' onChange={handleChange} value={person.firstName} />
            <input name='lastName' type="text" placeholder='Last name' onChange={handleChange} value={person.lastName}/>
            <input type="email" name="email" id="email" placeholder='email' onChange={handleChange} value={person.email} />
            <textarea value={person.comment} onChange={handleChange} name='comment' />
            <input 
                type="checkbox" 
                id="isFriendly" 
                name='isFriendly'
                checked={person.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name='employment'
                    value="unemployed"
                    onChange={handleChange} 
                    checked={person.employment ==="unemployed"}

                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    value="part-time"
                    id="part-time"
                    name='employment'
                    onChange={handleChange}
                    checked={person.employment==="part-time"}
                
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    value="full-time"
                    type="radio"
                    id="full-time"
                    onChange={handleChange}
                    checked={person.employment ==="full-time"}

                    name='employment'
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={person.favColor}
                onChange={handleChange}
                name='favColor'
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
                
            </fieldset>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form
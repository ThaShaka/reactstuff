import React from 'react'
import user from "./../img/user.png"
import star from "./../img/star-empty.png"
import star2 from "./../img/star-filled.png"

const Objects = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact(prevFav => {return {...contact, isFavorite: !prevFav.isFavorite}})
    }
    return <main>
        <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <img 
                        src={contact.isFavorite === false ? star : star2} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
    </main>
}

export default Objects
import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {
        console.log({ name , email, imageUrl});
        ContactsCollection.insert( { name , email, imageUrl});
        setName("");
        setEmail("");
        setImageUrl("");
    }

    return (
        <form>
        <div>
          <label htmlFor="name">
            Master NAme
          </label>
          <input id="name" type="text" value={name}
                 onChange= { (e) => setName(e.target.value) } />
        </div>
        <div>
          <label htmlFor="email">
            Master Email
          </label>
          <input id="email" type="email"  value={email}
                 onChange= { (e) => setEmail(e.target.value) } />
        </div>
        <div>
          <label htmlFor="email">
            Image Url
          </label>
          <input id="imageUrl" type="text"  value={imageUrl}
                 onChange= { (e) => setImageUrl(e.target.value) } />
        </div>
        <div>
            <button type="button" onClick={saveContact} >SAVE Contact</button>
        </div>
    </form>

    )
}

import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import {useTracker} from "meteor/react-meteor-data";

export const ContactList = () => {

    
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch(); //tracker
        }
    );

   /*const contacts = [];*/

    return (
        <div>
            <h3>Contact List </h3>
            { contacts.map (contact => (
                <li>{contact.name} - {contact.email} </li>
            )
            )}
        </div>
    )
}
import React from 'react';
import {ContactForm} from "./ContactForm";
import { ContactList } from './ContactList';

// name,email,imageURL
export const App = () => (
  <div>
    <h1>Welcome Master</h1>
    <h2>This is your wallet</h2>
    
    <ContactForm />
    <ContactList />
  </div>
);

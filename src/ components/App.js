import './App.css';
import React, { useState }  from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
//individual picee of codee


function App() {

   const [contacts,setContacts]= useState([]); //[] -> represents that initially they will be an empty array 
    const AddContactHandler = (contact) => {
        console.log(contact);

        //always use setcontacts to manupilate the state of the contacts 

        setContacts([...contacts,contact]);// to set the contact 

    }
    return(
        <div className='ui container'>
            <Header />
            <AddContact  AddContactHandler={AddContactHandler}/>
            <ContactList contacts={contacts}/>
            {/* props are used for contacts */}
        
        </div>
    );

}

export default App;

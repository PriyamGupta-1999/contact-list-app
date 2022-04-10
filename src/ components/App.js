import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
//individual picee of codee


function App() {

    const contacts = [
        {
            id: "1",
            name: "Dipesh",
            email: "Dipesh@gmail.com"
        },
        {
            id: "2",
            name: "Nikesh",
            email: "nicks@gmail.com"
        },
    ]
    return(
        <div className='ui container'>
            <Header />
            <AddContact />
            <ContactList contacts={contacts}/>
            {/* props are used for contacts */}
        
        </div>
    );

}

export default App;

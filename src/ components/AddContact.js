import React from "react";
class AddContact extends React.Component{
    render() {
        return (
            <div className="ui main">
                {/* Add Contact1 */}
                <h2>Add Contact</h2>
                    <form className="ui form">
                            <div className="field">
                                <label>Name</label>   
                                <input type="text" name="name" placeholder="Name"/> 
                             </div>
                    </form>

                    <form className="ui form">
                            <div className="field">
                                <label>Email</label>   
                                <input type="text" name="email" placeholder="email"/> 
                             </div>
                             <button className="ui button blue">Add</button>
                    </form>
            </div>
        );
    }
}

export default AddContact;
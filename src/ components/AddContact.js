import React from "react";
class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    };

    add= (e) => {
        e.preventDefault();
        if((this.state.name === "" && this.state.email=== "")){
            alert('all the fields are mandatory')

            return;
        }
        this.props.AddContactHandler(this.state); // add this detail to addcontact handler 

        this.setState({name:"",email:""}) //to reset the fields in the form 
        
    }

    render() {
        return (
            <div className="ui main">
                {/* Add Contact1 */}
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} 
                        />
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="email" 

                            value={this.state.email} //state variables 
                            onChange={(e) => this.setState({ email: e.target.value })} //used on change to active the state 
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        // create state
        this.state ={
            count:0,
            count2:0, // for multiple state 
        };
        console.log("Child - Constructor" + this.props.name)
    }
    componentDidMount() {
        //API Calls
        console.log("Child - componentDidMount" + this.props.name)
    }


    // Most important part of class based component is render method
    render() { // cannot create without render method
        const {count} = this.state;
        console.log("Child - Render" + this.props.name)
        return (
            <div>
                <h1>Profile class component</h1>
                <h2>Count: {count}</h2>
                <button onClick={() => {
                    //we do not mutate state directly
                    // Never do this.state = something  
                    this.setState({
                        count: 1
                    });
                }}>SetCount</button>
            </div>
        )
    }
}

export default Profile;
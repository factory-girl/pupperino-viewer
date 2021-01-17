import React from "react";

class Inputs extends React.Component{

    render(){
        return(
            <form onSubmit = {this.props.getDogs}>
                <div>
                    <span>How many dogs would you like to see?</span>
                    <input type="text" name="numberOfDogs" placeholder="Number of dogs"/>
                    <span>Enter a specific breed, if you want!</span>
                    <input type="text" name="dogBreed" placeholder="Optional breed"/>
                    <button>Show me the puppers</button>
                </div>
            </form>
        )
    }
}


export default Inputs;
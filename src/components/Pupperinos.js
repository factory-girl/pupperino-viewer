import React from "react";

class Pupperinos extends React.Component{

    render(){
        const dogImages = this.props.dogImages;

        return(
            <div>
                <ul>
                    { this.props.dogImages && Object.values(dogImages).map((image, index) => {
                        return <li key={ index }>
                            <img src={image} alt="doggo"/>
                            { this.props.dogNames[index] }
                            </li>;
                        })
                    }
                </ul>
                { this.props.error && <div>{this.props.error}</div> }
            </div>
            
        )
    }
}

export default Pupperinos;
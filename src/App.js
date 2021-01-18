import './App.css';
import React from "react";
import Inputs from "./components/Inputs";
import Pupperinos from "./components/Pupperinos";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: '',
          dogImages: '',
          dogNames: '',
        }
    }

    getDogs = async (e) => {
        e.preventDefault();
        const numberOfDogs = e.target.elements.numberOfDogs.value;
        const dogBreed = e.target.elements.dogBreed.value;
        const request = await fetch(this.getDoggoRequest(dogBreed, numberOfDogs));
        const response = await request.json();

        if (response) {
            this.setState({
                dogImages: response.message,
                dogNames: this.parseDogNames(response.message),
            });
        } else {
            this.setState({error: 'There was an error fetching the pupperinos'})
        }
    };

    getDoggoRequest = (dogBreed, numberOfDogs) => {
        if (dogBreed !== "") {
            return `https://dog.ceo/api/breed/${dogBreed}/images/random/${numberOfDogs}`;
        } else {
            return `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
        }
    }

    parseDogNames = (urls) => {
        return Object.values(urls).map((url) => {
            debugger
            let dogBreed = url.split("/");
            dogBreed = dogBreed[4].replace("-", " ");
            dogBreed = dogBreed.charAt(0).toUpperCase() + dogBreed.slice(1);

            return dogBreed;
        });
    }

  render() {
    return (
        <div className="App">
          <header>
            <h1>Random Dog Viewer Challenge</h1>
          </header>
          <Inputs getDogs={this.getDogs}/>
          <Pupperinos dogImages={this.state.dogImages}
                dogNames={this.state.dogNames}
            error={this.state.error}/>
        </div>
    );
  }
}


export default App;

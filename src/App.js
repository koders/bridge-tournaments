import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            name: null,
            id: null,
            picture: null,
        };
    }

    componentClicked = () => {}

    responseFacebook = (response) => {
        const {email, id, name, picture} = response;
        this.setState({
            email,
            name,
            id,
            picture: picture.data,
        });
    }

    render() {
        const { email, name } = this.state;
        const loginStuff = email
            ? <div>
                <p>Welcome back, {name}</p>
                <img src={this.state.picture.url} alt="yo" />
            </div>
            :
            <FacebookLogin
                appId="1126847917389581"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"> Welcome to React </h1>
                </header>
                <div className="App-intro">
                    {loginStuff}
                </div>
            </div>
        );
    }
}

export default App;

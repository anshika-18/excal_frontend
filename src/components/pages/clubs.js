import axios from "axios";
import React, { Component } from 'react'


export default class notification extends Component {
    componentDidMount() {
        console.log("hello");
        axios
            .get("http://localhost:9000/clubs")
            .then((response) => {
                console.log(response.data);
                // this.setState({ contestants: response.data });
            })
            .catch((error) => {
                console.log(error);
                alert("Server Error");
            });
    }
    render() {
        return (
            <div>
                <p>COMING SOON...</p>
            </div>
        )
    }
}
import React,{Component} from 'react'
import './about.css'
export default class about extends Component{

    render(){
        return(
            <div>
                <div className="about_out">
                <div className="about_head">ABOUT US</div>
                <div className="about_flex">
                <div><img src="https://upload.wikimedia.org/wikipedia/en/7/75/National_Institute_of_Technology%2C_Kurukshetra_Logo.png"></img></div>
                <div className="about_text">A website that provides details of all the events happening at National Institute Of Technology Kurukshetra..!!
                    <br></br>All the Technical Events<br></br>All the cultural Events<br></br>All the Social Events
                </div>
                </div>
                </div>

            </div>
        )
    }
}

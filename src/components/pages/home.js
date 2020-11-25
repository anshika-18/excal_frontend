import React,{Component} from 'react'
import altius from '../images/altius.mp4'
import './home.css'
import chatbot from '../images/chatbot.jpeg'
export default class notification extends Component{
    render(){
        return(
            <div className="main">
               
                <video className="video" controls autoPlay loop muted>
                <source src={altius} type="video/mp4"></source></video>




            </div>
        )
    }
}
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {names} from './names'
import './society.css'
import chatbot from '../images/chatbot.jpeg'
import excalibur from '../images/excalibur.jpeg'
import game from '../images/game.jpeg'
import hackathon from '../images/hackathon.jpeg'
import astrom from '../images/astrom.jpeg'
export default class society extends Component{
    render(){
        return(
            <div class="position">
               <div class="list" >
                        {names.map(x=>{
                            return(
                           <Link to={{pathname:"/societies/"+x.item, state:{eventssociety:x.events}}} className="list-link"> <li className="list-item"><span>{x.item}</span></li></Link>
                            )
                        })}
                </div>
                <div class="color">
                    <div class="slid">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active hell">
      <img src={excalibur} class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item  hell">
      <img src={chatbot} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item hell">
      <img src={game} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item hell">
      <img src={hackathon} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item hell">
      <img src={astrom} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>



            </div>
        )
    }
}
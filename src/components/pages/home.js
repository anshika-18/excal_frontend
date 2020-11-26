import React,{Component} from 'react'
import altius from '../images/altius.mp4'
import './home.css'
import chatbot from '../images/chatbot.jpeg'
import game from '../images/game.jpeg'
import brainstorm from '../images/brainstorm.jpeg'
import b_plan from '../images/b_plan.jpeg'
import bit_coding from '../images/bit_coding.jpeg'
import cadpro from '../images/cadpro.jpeg'
import civera from '../images/civera.jpeg'
import intervista from '../images/intervista.jpeg'
import keynote from '../images/keynote.jpeg'
import machinabilty from '../images/machinabilty.jpeg'
import micro_innovator from '../images/micro_innovator.jpeg'
import cv_qiuz from '../images/cv_quiz.jpeg'
export default class notification extends Component{
    render(){
        return(
            <div className="main">
               
                <video className="video" controls autoPlay loop muted>
                <source src={altius} type="video/mp4"></source></video>

                <div class="upcoming">UPCOMING EVENTS</div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active anshu">
            <div  class="d-flex flex-row bd-highlight mb-3 ">
            <div class="p-3 bd-highlight col-md-3"> <img src={cadpro} class="d-block w-100  anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3 "><img src={game} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3 "><img src={brainstorm} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3 "> <img src={b_plan} class="d-block w-100 anshi" alt="..."></img></div>
                
              </div>
          </div>
          <div class="carousel-item">
            <div  class="d-flex flex-row bd-highlight mb-3 ">
            <div class="p-3 bd-highlight col-md-3"> <img src={civera} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3"><img src={bit_coding} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3"><img src={cv_qiuz} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3"> <img src={chatbot} class="d-block w-100 anshi" alt="..."></img></div>
                
              </div>
          </div>
          <div class="carousel-item">
            <div  class="d-flex flex-row bd-highlight mb-3 ">
            <div class="p-3 bd-highlight col-md-3"> <img src={intervista} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3"><img src={keynote} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3"><img src={machinabilty} class="d-block w-100 anshi" alt="..."></img></div>
                <div class="p-3 bd-highlight col-md-3"> <img src={micro_innovator} class="d-block w-100 anshi" alt="..."></img></div>
              </div>
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
        )
    }
}
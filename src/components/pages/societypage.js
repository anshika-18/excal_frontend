import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './societypage.css'
export default class societypage extends Component{

    render(props){
        console.log(this.props)
        return(
            <div className="outer">
                <div className="heading">{this.props.match.params.item}</div>
                <div className="inner">
                <div className="list">
                    {this.props.location.state.eventssociety.map(y=>{
                       return(
                        <Link to={{pathname:'/societie/event/'+y.event, state:{selected_name:y.event,selected_src:y.src,selected_data:y.data}}}><li className="list-item">{y.event}</li></Link>
                       )
                    })}
                </div>
                <div class="images">
                {this.props.location.state.eventssociety.map(y=>{
                       return(
                        <div><img src={y.src}></img></div>
                       )
                    })}
                </div>
                </div>
            </div>
        )
    }
}
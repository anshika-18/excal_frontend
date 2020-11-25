import React,{Component} from 'react'
import './eventpage.css'
export default class eventpage extends Component{
    render(props){
        console.log(this.props)
        return(
            <div className="out">
               <div className="image">
                   <img src={this.props.location.state.selected_src}></img>
               </div>
               <div className="text">
                   <div className="head">{this.props.location.state.selected_name}</div>
                   <div className="data">{this.props.location.state.selected_data}</div>
                  <button className="button">Register</button>
               </div>
            </div>
        )
    }
}
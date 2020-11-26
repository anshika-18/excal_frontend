import React,{Component} from 'react'

export default class signin extends Component{
    render(){
        return(
            <div>

<form  action="http://localhost:9000/club" method="POST">
    <input type="text" name="username" placeholder="name"></input>
    <input type="password" name="passwd" placeholder="password"></input>
    <button type="submit">submit it</button>    
</form>

            </div>
        )
    }
}
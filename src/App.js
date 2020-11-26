import React from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar'
import Society from './components/pages/society'
import Signin from './components/pages/signin'
import Home from './components/pages/home'
import Clubs from './components/pages/clubs'
import Contact from './components/pages/contact'
import About from './components/pages/about'
import Societypage from './components/pages/societypage'
import Eventpage from './components/pages/eventpage'
function App() {
  return (
    <div>
     <Router>
       <div>
        <Navbar />
       </div>
       <div>
       <Route path='/' exact component={Home}></Route>
        <Route path='/home' component={Home}></Route>
          <Route path='/society' component={Society}></Route>
          <Route path='/clubs' component={Clubs}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/societies/:item' component={Societypage}></Route>
          <Route path='/societie/event/:event' component={Eventpage}></Route>
          <Route path="/signin" component={Signin}></Route>
       </div>
       <footer>
    <div class="footer" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <h4> EVENT EXPLORER </h4>
                </div>
                <div class="col-lg-3 col-sm-2 col-xs-3">
                    <h3> DEVELOPED BY </h3>
                    <ul>
                        <li> <p> Amisha Chokker </p> </li>
                        <li> <p> Anjali Sewani </p> </li>
                        <li> <p> Anshika Jain </p> </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-2 col-xs-3">
                <h3> SPECIAL MENTION </h3>
                    <ul>
                        <li> <p> Siddhant Gupta </p> </li>
                    </ul>
                </div>
               
          
        </div>
   
    </div>

                          
    <div class="footer-bottom">
        <div class="container">
            <p class="pull-left copyright"> Copyright © NIT KKR 2020. All right reserved. </p>
       
        </div>
    </div>
</div>
</footer>
     </Router>
      
    </div>
  );
}

export default App;

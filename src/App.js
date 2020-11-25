import React from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar'
import Society from './components/pages/society'
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
       </div>
       <div className="footer">
         
       </div>
     </Router>
      
    </div>
  );
}

export default App;

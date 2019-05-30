import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Movie from './Movie'
import Note from './Note'
import Subject from './Subject'
import { Switch,Route,NavLink,Link,Redirect} from "react-router-dom"
import './public/font-awesome-4.7.0/css/font-awesome.css'
class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="App">
      <div className="top">
      <NavLink to='/home' className="home">豆瓣</NavLink>
      <div className="right">
	      <NavLink to="/movie" className="movie">电影</NavLink>
	      <NavLink to="/books" className="books">图书</NavLink>      
	      <NavLink to="/broadcast" className="broadcast">广播</NavLink>
	      <NavLink to="/group" className="group">小组</NavLink>
	      <NavLink to="/search" className="fa fa-bars"></NavLink>
     </div>
     </div>
	 <Switch>
	    <Route path="/home" exact component={Home} />
	    <Route path="/movie" exact component={Movie} />
	    <Route path='/note/:id' component={Note} />
	    <Route path="/movie/subject/:id" exact component={Subject}/>
	    <Redirect from="/" to="/home" exact />	       
	 </Switch>
	    
    </div>
    );
  }
}

export default App;

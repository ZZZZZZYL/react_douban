import React,{Component} from "react"

import './public/home.css'
import { Switch,Route,NavLink,Redirect} from "react-router-dom"
import List from './list'
class Head extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return <div className='headdiv'>
			<div className="lis">
			      <NavLink to="/movie/nowintheater">影院热映</NavLink>
			      <NavLink to="/mine">我的</NavLink>
			      <NavLink to="/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</NavLink>
			      <NavLink to="/doubanapp/app?channel=card_home&amp;direct_dl=1">使用豆瓣APP</NavLink>			     
		     </div>
			 <Switch>
				 <Route path="/movie/nowintheater" component={List} />  
			 </Switch>
			<List />
			 
		</div>
		
	}
}

export default Head
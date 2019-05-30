import React,{Component} from "react"
import './public/home.css'
import { Switch,Route,NavLink,Redirect} from "react-router-dom"
import Movielist from './Movielist'

class Movie extends Component{
	constructor(props){
		super(props);
		this.state={
			list: ['movie_showing','movie_free_stream','movie_latest'],
			_:['1534768313591','1534768313594','1534768313596']
		}
	}
	
	render(){
		return <div className='headdiv'>
		 { this.state.list.map((item,index)=>{
		 
		  	return <Movielist list={item} _num={this.state._[index]} key={index}/>
		  })}
		</div>
		
	}
}

export default Movie
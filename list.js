import React, { Component } from 'react';
import './public/list.css'
import axios from 'axios';
import { Route,Switch,NavLink} from "react-router-dom";
import './public/public.css'
import Note from './Note'
class List extends Component{
	constructor(props){
		super(props);
		this.state={
			obj:[],
			time : ''
		}
	}
	componentDidMount(){
		this.getData()
	}
	getData(){
		axios.get("/db/rexxar/api/v2/recommend_feed",{
			params:{
				alt:"json",
				next_date:"",
				loc_id:108288,
				gender:"",
				birthday:"",
				udid:"9fcefbf2acf1dfc991054ac40ca5114be7cd092f",
				for_mobile:1
			}
		}).then((res)=>{

			this.setState({
				obj: res.data.recommend_feeds,
				time : res.data.date
			})
			
			
		});
	}
	render(){
		console.log(this.state.obj)
		return (
			<div>
			<h4 >{this.state.time}</h4>
			<ul className="list">
				{

				this.state.obj.map((item,index)=>{
					if( item.target.kind === 1015 )
					{return  <li key={index} className="firstkind">
					<NavLink to={`/note/${item.target.id}`}>
						<div style={{float:'left'}}>
						<h4>{item.title}</h4>
						<p>{item.target.desc}</p>
						</div>
						<img src={item.target.cover_url} />
						<i>by{item.target.author.name}</i>		
					</NavLink>
					
					</li>}
					else if( item.target.kind === 1026 ){
						return <li key={index} className="secondkind">
						<NavLink to={`/note/${item.target.id}`}  style={{textDecoration:'none'}}>
							<img src={item.target.cover_url} />
							<div>
							<img src={item.target.more_pic_urls[0]} />
							<img src={item.target.more_pic_urls[1]} />
							</div>
							<h4>{item.title}</h4>
							<i>by{item.target.author.name}</i>	
						</NavLink>
						</li>
					}
				})
				}
			</ul>
			
			</div>
		)
	}	
}

export default List;

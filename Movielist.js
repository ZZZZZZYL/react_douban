import React,{Component} from "react"
import './public/home.css'
import axios from  'axios'
import { NavLink,Switch,Route} from "react-router-dom"
import './public/movielist.css'

class Movielist extends Component{
	constructor(props){
		super(props);
		this.state={
			obj: [],
			title: []
		}
	}
	componentWillMount(){
		this.getData();
	}
	getData(){
		axios.get("/db/rexxar/api/v2/subject_collection/"+this.props.list+"/items",{
			params:{
				os:'ios',
				start:0,
				count:8,
				loc_id: 108288,
				_: "1534768313591"
			}
		}).then((res)=>{

			this.setState({
				obj:res.data.subject_collection_items,
				title: res.data.subject_collection
			})
			
		});
	}
	render(){		
		let movielist = this.state.obj;
		
		return (
			<div className="movielist">
		<div style={{height:'24px'}}>
			<h3>{this.state.title.name}</h3>
			<i><a href="">更多</a></i>
		</div>
			<ul>{

				movielist.map((item,index)=>{
					return <li key={index}>
					<NavLink to={`/movie/subject/${item.id}`} >
						<img src={item.cover.url} />
						<p>{item.title}</p>
						<b>{item.year}</b>					
					</NavLink >
					<Switch>
					
					</Switch>
					
					</li>
				})
			}</ul>
		</div>	)
	}
}

export default Movielist
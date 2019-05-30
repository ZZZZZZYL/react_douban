import React,{Component} from "react"
import './public/home.css'
import axios from  'axios'
import { NavLink} from "react-router-dom"
import './public/subject.css'

class Subject extends Component{
	constructor(props){
		super(props);
		this.state={
			obj:[],
			tags: []
		}
	}
	componentDidMount(){
		let id = this.props.match.params.id;
		this.getData(id)
	}
	getData(id){
		axios.get("/db/rexxar/api/v2/elessar/subject/"+id).then((res)=>{
			console.log(res)
			this.setState({
				obj: res.data,
				tags: res.data.tags
			})		
		});
	}
	
	render(){
		return <div className='subjectdiv'>
			<div>
				<h1>{this.state.obj.title}</h1>
				<ul>{
					this.state.tags.map((item,index)=>{
						return <li key={index}>
							<a > {item.name}</a>
						</li>
					})
				}</ul>
				<div></div>
			</div>
		</div>
		
	}
}

export default Subject
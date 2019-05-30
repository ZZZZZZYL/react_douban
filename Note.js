import React ,{Component} from "react"
import {NavLink} from "react-router-dom"
import axios from "axios"
import './public/note.css'
class Note extends Component {	
	constructor(props){
		super(props);
		this.state={
			obj:[],
			author: [],
			img: []
		}
	}
	componentDidMount(){
		let id = this.props.match.params.id;
		this.getData(id)
	}
	getData(id){
		axios.get("/db/rexxar/api/v2/note/"+id).then((res)=>{
			this.setState({
				obj: res.data,
				author: res.data.author,
				img: res.data.photos
			})		
		});
	}
	render(){
		console.log(this.state.img)
		 return <div className="card">
				<section className="header">
					<h1>{this.state.obj.title}</h1>
					<div className="user-title" >
						<span>{this.state.author.name}    <b style={{color:"#ccc",fontWeight:"normal"}}>{this.state.obj.create_time}</b></span>
					</div>
				</section>
				<section className="notecontent">
					<p>{this.state.obj.abstract}</p>
					{
						this.state.img.map((item,index)=>{

							return <img src={item.image.large.url} />
						})
					}
					
				</section>
		  </div>
	}
}

export default Note;
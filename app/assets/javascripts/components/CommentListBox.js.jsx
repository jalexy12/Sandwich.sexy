'use strict'
class CommentListBox extends React.Component {
	constructor(props){
		console.log(props)
		super()
		this.state = {
			comments: props.comments,
			lengthOfComments: props.comments.length,
			currentMin: 0,
			currentMax: 9,
			paginateBy: 10,
		}
	}
	nextPage(){
		let paginateBy = this.state.paginateBy;
		if (this.state.currentMax + paginateBy <= this.state.lengthOfComments){
			this.setState({ currentMin: this.state.currentMin + paginateBy, currentMax: this.state.currentMax + paginateBy })
		}else{
			return
		}
	}

	render(){
		let paginatedComments = this.state.comments.slice(this.state.currentMin, this.state.currentMax)
		let paginateBy = this.state.paginateBy
		let commentNodes = paginatedComments.map((comment) =>{
			return comment
		})
		return(
			  <div>
				<ul className="list-unstyled">
					{commentNodes}
				</ul>
				<button onClick={this.nextPage.bind(this)} className="btn btn-primary">More</button>
			</div>
			)
	}
}
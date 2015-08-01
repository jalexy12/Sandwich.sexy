'use strict'
class CommentListBox extends React.Component {
	constructor(props){
		console.log(props)
		super()
		this.state = {
			currentMin: 0,
			currentMax: 9,
			paginateBy: 10,
		}
	}
	nextPage(){
		let paginateBy = this.state.paginateBy;
		if (this.state.currentMax <= this.props.data.length){
			this.setState({ currentMin: this.state.currentMin + paginateBy, currentMax: this.state.currentMax + paginateBy })
		}else{
			return
		}
	}

	render(){
		let paginatedComments = this.props.data.slice(this.state.currentMin, this.state.currentMax)
		let paginateBy = this.state.paginateBy
		let commentNodes = paginatedComments.map((comment) =>{
			return <Comment author={comment.author} comment={comment.comment} />
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
'use strict'
class CommentListBox extends React.Component {
	constructor(props){
		super()
		this.state = {
			currentMin: 0,
			currentMax: 6,
			paginateBy: 6,
		}

	}
	checkIsLastPage(){
		this.setState({ isLastPage: this.state.currentMax < this.props.data.length - this.state.paginateBy ? false : true})
	}

	nextPage(){
		let paginateBy = this.state.paginateBy;
		if (!this.state.isLastPage){
			this.setState({ currentMin: this.state.currentMin + paginateBy, currentMax: this.state.currentMax + paginateBy })
			this.checkIsLastPage()
		}
	}

	componentWillReceiveProps(nextProps) {
		this.checkIsLastPage()
	}

	render(){
		console.log(this.props.data)
		let paginatedComments = this.props.data.slice(this.state.currentMin, this.state.currentMax)
		let paginateBy = this.state.paginateBy
		let commentNodes = paginatedComments.map((comment) =>{
			return <Comment author={comment.author} comment={comment.comment} />
		})
		var button;
		if (!this.state.isLastPage){
			button = <button onClick={this.nextPage.bind(this)} className="btn btn-primary more-button">More</button>
		}else{
			button = null
		}
		return(
			  <div>
				<ul className="list-unstyled">
					{commentNodes}
				</ul>
				{button}
			</div>
			)
	}
}
'use strict'
class SandwichHome extends React.Component{
	constructor(props){
		super();
		this.state = {
			modalIsShowing: false,

		}
	}
	toggleModalVisibility(){
		this.setState({modalIsShowing: !this.state.modalIsShowing})
	}


	render(){
		return(
				<div>
			    	 <SandwichSlider startingSandwich={this.props.id}
			    				     currentPage={this.props.currentPage}
			    				     onPaginate={this.props.onPaginate}
			    				      sandwiches={this.props.sandwiches}/>
			         <CommentBox url={"/sandwiches/" + this.props.id + "/comments"} pollInterval={3000} />
				</div>
			)
	}
}



'use strict'

class SandwichModalView extends React.Component{
	render(){
		return (
		<div className="container-fluid sandwich-modal-view">
		  <div className="row">
			<div className="col-sm-12 col-lg-6">
				<img src={this.props.sandwich_image} className="sandwich-modal-image" />
			</div>
			<div className="col-sm-12 col-lg-5 col-lg-offset-1 comment-section">
			  {this.props.commentBox}
			</div>
		  </div>
		</div>)
	}
}
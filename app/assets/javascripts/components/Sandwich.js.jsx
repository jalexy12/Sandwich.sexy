'use strict'

class Sandwich extends React.Component{

	constructor(props){
		super();
	}

	render(){
		return(
				   <div>
					<div className="row">
					  <div className="sandwich-image-wrapper text-center col-sm-12 col-lg-8 col-lg-offset-2">
						<img className="sandwich-image" src={this.props.sandwich_image} />
						<div className="image-overlay col-sm-12 col-lg-8">
							<div className="col-sm-4 col-lg-4 imagebox-text">Dislikes: 1</div>
							<div className="col-sm-4 col-lg-4 imagebox-text">Comments: 1</div>
							<div className="col-sm-4 col-lg-4 imagebox-text">Likes: 1</div>
						</div>
					  </div>
					</div>
			    	  <div className="row sandwich-nav-row">
			    		<div className="col-sm-12 col-lg-8 col-lg-offset-2">
			    			<button className="btn btn-danger btn-circle">
			    			  <i className="fa fa-close"></i>
			    			</button>
			    			<button onClick={this.props.onComment} className="btn btn-default btn-circle btn-comment">
			    			  <i className="fa fa-comment-o"></i>
			    			</button>
			    			<button className="btn btn-default btn-share btn-circle">
			    			  <i className="fa fa-share"></i>
			    			</button>
			    			<button onClick={this.props.next} className="btn btn-primary btn-circle btn-like">
			    			   <i className="fa fa-heart" styles="color:white;"></i>
			    			</button>
			    		</div>
			          </div>
			         </div>
			)
	}
}
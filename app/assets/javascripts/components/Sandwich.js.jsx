class Sandwich extends React.Component{

	constructor(props){
		super();
	}

	render(){
		return(
				<div className="contaner">
			    	  <div className="row sandwich-nav-row">
			    		<div className="col-sm-12 col-lg-8 col-lg-offset-2">
			    			<button onClick={this.props.next} className="btn btn-primary btn-circle btn-like">
			    			   <i className="fa fa-heart" styles="color:white;"></i>
			    			</button>
			    			<button className="btn btn-default btn-circle">
			    			  <i className="fa fa-share"></i>
			    			</button>
			    			<h3 className="sandwich-heading">
			    			  {this.props.name}
			    			</h3>
			    			<button onClick={this.props.onComment} className="btn btn-default btn-circle btn-comment">
			    			  <i className="fa fa-comment-o"></i>
			    			</button>
			    			<button className="btn btn-danger btn-circle">
			    			  <i className="fa fa-close"></i>
			    			</button>
			    		</div>
			          </div>
				    <div className="container">
						<div className="row">
						  <div className="col-sm-12 col-lg-6 col-lg-offset-2">
							<img className="sandwich-image" src={this.props.sandwich_image} />
						  </div>
						</div>
						<div className="row">
						  <div className="col-lg-6 col-lg-offset-2">
							<p className="center-align sandwich-description">
							  {this.props.description}
							</p>
						  </div>
						</div>
					</div>
			</div>
			)
	}
}
class Sandwich extends React.Component{

	constructor(props){
		super();
	}

	render(){
		return(
			<div className="text-center sandwich-wrapper col-sm-8">
			    <div className="container">
			    	<div className="row">
			    		<div className="col-sm-6">
			    			<button className="btn btn-primary btn-circle btn-like">
			    			  <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
			    			</button>
			    		</div>
			    	</div>
			    </div>
			    <div className="container">
					<div className="row">
						<h3>
						  {this.props.name}
						</h3>
					</div>
					<div className="row">
					  <div className="col-sm-12 col-lg-6 col-lg-offset-3">
						<img className="sandwich-image" src={this.props.sandwich_image} />
					  </div>
					</div>
					<div className="row">
						<p className="center-align sandwich-description">
						  {this.props.description}
						  <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
						</p>
					</div>
					<div className="row">
					    <div className="col-sm-2"></div>
						<div className="col-sm-4">
							<button href="#" className="btn btn-danger no-button">Nope</button>
						</div>
						<div className="col-sm-4">
							<button href="#" onClick={this.props.next} className="btn btn-primary yes-button"> <span className="glyphicon glyphicon-heart" aria-hidden="true"></span></button>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
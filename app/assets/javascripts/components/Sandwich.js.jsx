class Sandwich extends React.Component{

	constructor(props){
		super();
	}

	render(){
		console.log(this.props)
		return(
			<div className="container center-align">
				<div className="row">
					<h3>
					  {this.props.name}
					</h3>
				</div>
				<div className="row">
					<img className="sandwich-image" src={this.props.sandwich_image} />
				</div>
				<div className="row">
					<p className="center-align sandwich-description">
					  {this.props.description}
					</p>
				</div>
				<div className="row">
					<div className="col s2">
						<a href="#" className="btn no-button">Nope</a>
					</div>
					<div className="col-sm-1">
						<a href="#" className="btn yes-button">Yep</a>
					</div>
				</div>
			</div>
			)
	}
}
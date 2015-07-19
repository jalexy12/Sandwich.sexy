class SandwichHome extends React.Component{
	constructor(props){
		super()
	}

	render(){
		return(
			<div className="col-sm-3 home-sandwich-box">
				<div className="row">
					<img className="home-sandwich-image" src={this.props.sandwich_image} />
				</div>
				<p className="home-sandwich-description">
					{this.props.description}
				</p>
			</div>
			)
	}
}
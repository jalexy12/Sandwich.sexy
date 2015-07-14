class Sandwich extends React.Component{
	render(){
		return(
			<div className="center-align">
				<div className="row">
					{this.props.name}
				</div>
				<div className="row">
					<img src={this.props.sandwich_image} />
				</div>
				<div className="row">
					<div className="col s6">
						<button className="btn">Yep</button>
					</div>
					<div className="col s6">
						<button className="btn">Nope</button>
					</div>
				</div>
			</div>
			)
	}
}
class Sandwich extends React.Component{
	render(){
		return(
			<div>
				<div className="row">
					{this.props.name}
				</div>
				<div className="row">
					<img src={this.props.sandwich_image} />
				</div>
				<div className="row">
					{this.props.description}
				</div>
			</div>
			)
	}
}
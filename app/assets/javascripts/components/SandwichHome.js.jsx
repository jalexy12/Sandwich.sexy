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
			<div className="col-sm-3 home-sandwich-box">
				<div className="row">
					{moment(this.props.created_at).format('MMMM Do YYYY, h:mm:ss a')}
					<img className="home-sandwich-image" src={this.props.sandwich_image} />
				</div>
				<p className="home-sandwich-description">
					{this.props.description}
				</p>
				<button onClick={this.toggleModalVisibility.bind(this)} className="btn btn-primary">Vote</button>
				<Modal
				    visible={ this.state.modalIsShowing }
				    closable={ true }
				    // onShow={  }
				    onHide={ this.toggleModalVisibility.bind(this) }
				    >
				    <SandwichSlider startingSandwich={this.props.id}
							        currentPage={this.props.currentPage}
							        onPaginate={this.props.onPaginate}
							        sandwiches={this.props.sandwiches}/>
				</Modal>
			</div>
			)
	}
}
class SandwichSlider extends React.Component{

	constructor(props){
		super();
		this._like = this._like.bind(this)
		this.state = {
			sandwiches: [],
			currentSandwich: 0
		}
	}

	getSandwiches(){
		var that = this;
		$.ajax({
				url: '/sandwiches.json',
				success: function (data) {
					that.setState({
						sandwiches: data
					})
				}.bind(this),
				error: function(xhr, status, err){
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});	
	}

	componentWillMount() {
		this.getSandwiches();
	}
}
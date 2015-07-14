class SandwichSlider extends React.Component{

	constructor(props){
		super();
		// this._like = this..bind(this)
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
				this.setState({
					sandwiches: data
				})
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});	
	}

	componentDidMount() {
		this.getSandwiches();
	}

	render(){
		var sandwiches = this.state.sandwiches.map(sandwich => {
			console.log(sandwich);
			return <Sandwich name={sandwich.name} sandwich_image={sandwich.sandwich_image} description={sandwich.description} />
		})
		return(
		<div> 
		  {sandwiches}
		</div>
		)
	}
}
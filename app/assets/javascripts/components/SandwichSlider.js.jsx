class SandwichSlider extends React.Component{

	constructor(props){
		super();
		this.nextSandwich = this.nextSandwich.bind(this)

		var sandwich = {
			name: "Test Sandwich",
			description: "This is just a test sandwich",
			sandwich_image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97325&w=325&h=325"
		}

		this.state = {
			sandwiches: [sandwich],
			currentSandwich: 0
		}
	}

	getSandwiches(){
		var that = this;
		$.ajax({
			url: '/sandwiches.json',
			success: function (data) {
				console.log(data)
				that.setState({
					sandwiches: data
				})
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});	
	}

	nextSandwich(){
		this.setState({
			currentSandwich: this.state.currentSandwich + 1
		})
	}

	componentDidMount() {
		this.getSandwiches();
	}

	render(){
		var sandwich = this.state.sandwiches[this.state.currentSandwich]
		return(
			   <Sandwich 
			   		name={sandwich.name} 
			   		sandwich_image={sandwich.sandwich_image} 
			   		description={sandwich.description} 
			   		next={this.nextSandwich}
			   		 />)
	}
}
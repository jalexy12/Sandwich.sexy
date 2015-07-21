function arrayObjectIndexOf(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

class SandwichSlider extends React.Component{

	constructor(props){
		super();
		this.nextSandwich = this.nextSandwich.bind(this)
		// console.log(props)

		var sandwich = {
			name: "Test Sandwich",
			description: "This is just a test sandwich",
			sandwich_image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97325&w=325&h=325"
		}

		this.state = {
			sandwiches: props.sandwiches,
			currentSandwich: arrayObjectIndexOf(props.sandwiches, props.startingSandwich, "id"),
			maxSandwiches: props.sandwiches.length,
		}
	}

	handleOnOutOfSandwiches(){
		console.log(this.props.currentPage)
		this.props.onPaginate(this.props.currentPage + 1)
	}

	nextSandwich(){
		if (this.state.currentSandwich < this.state.maxSandwiches - 1){
			this.setState({ currentSandwich: this.state.currentSandwich + 1 })
		} else{
			this.handleOnOutOfSandwiches();
		}
		
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


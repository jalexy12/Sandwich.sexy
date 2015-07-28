'use strict'


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
		this.renderComments = this.renderComments.bind(this)
		this.renderSandwich = this.renderSandwich.bind(this)

		this.state = {
			sandwiches: props.sandwiches,
			currentSandwich: arrayObjectIndexOf(props.sandwiches, props.startingSandwich, "id"),
			maxSandwiches: props.sandwiches.length,
			route: "sandwich"
		}
	}

	renderComments(){
		this.setState({ modalVisible: true })
	}

	renderSandwich(){
		this.setState({ modalVisible: false })
	}

	handleOnOutOfSandwiches(){
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
		let sandwich_image = sandwich.sandwich_image ? sandwich.sandwich_image : sandwich.sandwich_image_url
			return(
				<div className="sandwich-slider-home">
					<Sandwich 
				   		name={sandwich.name} 
				   		id={sandwich.id}
				   		sandwich_image={sandwich_image} 
				   		description={sandwich.description} 
				   		next={this.nextSandwich}
				   		onComment={this.renderComments}
			   		 />
			   		 <Modal
			   		     visible={ this.state.modalVisible }
			   		     closable={ true }
			   		     onClose={ this.renderSandwich.bind(this) }
			   		     view={<SandwichModalView 
			   		     		commentBox={
			   		     			<CommentBox url={"/sandwiches/" + sandwich.id + "/comments"} />}
			   		     			sandwich_image={sandwich_image}
			   		     		/> }
			   		    >

			   		     <header>
			   		         <h1>Your Modal</h1>
			   		     </header>

			   		     <p>Hello there</p>
			   		 </Modal>
			   	 </div>)
	}
}


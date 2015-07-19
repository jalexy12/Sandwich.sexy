class SandwichHomeBox extends React.Component{
	constructor(props){
		super()
		this.state = {
			sandwiches: props.sandwiches
		}
	}

	renderSandwiches(){
		let sorted_sandwiches = this.state.sandwiches.sort((sandwich1, sandwich2) =>{
			sandwich1.created_at - sandwich2.created_at
		});
		return sorted_sandwiches.map((sandwich) =>{
			return <SandwichHome 
					key={sandwich.id}
				    id={sandwich.id}
				    sandwich_image={sandwich.sandwich_image}
				    description={sandwich.description}
				    created_at={sandwich.created_at} 
				   />
		})
	}

	render(){
		return(
			<div> 
				{this.renderSandwiches()}
			</div>
			)
	}
}
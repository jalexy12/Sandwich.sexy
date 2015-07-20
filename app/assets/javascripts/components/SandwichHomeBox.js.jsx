class SandwichHomeBox extends React.Component{
	constructor(props){
		super()
		this.getSandwiches = this.getSandwiches.bind(this)
		this.state = {
			sandwiches: []
		}
	}

	getSandwiches(){
		$.ajax({
			url: '/sandwiches.json',
			type: 'get',
			success: (data) => {
				this.setState({sandwiches: data})
			},
			error: () => {
				console.log("Error")
			}
		})
	}

	renderSandwiches(){
		let sorted_sandwiches = this.state.sandwiches.sort((sandwich1, sandwich2) =>{
			Number(sandwich2.created_at) - Number(sandwich1.created_at)
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

	componentDidMount() {
		this.getSandwiches();
	}

	render(){
		return(
			<div className="row home-sandwich"> 
				{this.renderSandwiches()}
			</div>
			)
	}
}
class SandwichHomeBox extends React.Component{
	constructor(props){
		super()
		this.getSandwiches = this.getSandwiches.bind(this)
		this.handleOnPaginate = this.handleOnPaginate.bind(this)
		this.getPeopleDone = this.getPeopleDone.bind(this)
		this.state = {
			didFetchData: false,
			sandwiches: [],
			meta: {
				total_pages: 0,
				current_page: 1,
				total_count: 0,
			},
			fetchData: {
				page: 1,
			}
		}
	}

	getSandwiches(){
		console.log("fetchData", this.state.fetchData)
		$.ajax({
			url: '/sandwiches.json',
			type: 'get',
			data: this.state.fetchData,
			success: (data) => {
				this.getPeopleDone(data)
			},
			error: () => {
				console.log("Error")
			}
		})
	}

	getPeopleDone(data){
		this.setState({
			didFetchData: true,
			sandwiches: data.sandwiches, 
			meta: data.meta
		})
	}

	handleOnPaginate(pageNumber){
		this.state.fetchData.page = pageNumber
		this.setState(this.state)
		this.getSandwiches();
	}

	renderSandwiches(){
		return this.state.sandwiches.map((sandwich) =>{
			return (<SandwichHome 
					key={sandwich.id}
				    id={sandwich.id}
				    sandwich_image={sandwich.sandwich_image}
				    description={sandwich.description}
				    created_at={sandwich.created_at} 
				   />)
				 
		})
	}

	componentDidMount() {
		this.getSandwiches();
	}

	render(){
		return(
			 <div>
			 	<div className="row text-center">
					<PaginatorSection totalPages={this.state.meta.total_pages} currentPage={this.state.meta.current_page} onPaginate={this.handleOnPaginate}/>
				</div>
				<div className="row home-sandwich text-center">
				 {this.renderSandwiches()}
				</div>
			</div>
				
			)
	}
}



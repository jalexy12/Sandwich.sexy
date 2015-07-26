class SandwichHomeBox extends React.Component{
	constructor(props){
		super()
		this.getSandwiches = this.getSandwiches.bind(this)
		this.handleOnPaginate = this.handleOnPaginate.bind(this)
		this.getSandwichesDone = this.getSandwichesDone.bind(this)
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
			},
			keywords: []
		}
	}

	getSandwiches(){
		console.log("fetchData", this.state.fetchData)
		$.ajax({
			url: '/sandwiches.json',
			type: 'get',
			data: this.state.fetchData,
			success: (data) => {
				this.getSandwichesDone(data)
			},
			error: () => {
				console.log("Error")
			}
		})
	}
	

	getSandwichesDone(data){
		this.setState({
			didFetchData: true,
			sandwiches: data.sandwiches, 
			meta: data.meta
		})
	}

	onOptionSelected(option, event){
		this.searchSandwiches(option)
	}

	searchSandwiches(term){
		$.ajax({
				url: '/sandwiches/search.json',
				type: 'get',
				data: {term: term},
				success: (data) => {
					this.setState({sandwiches: data.sandwiches})
				},
				error: () => {
					console.log("Error")
				}
			})
	}

	getSearchOptions(){
		$.ajax({
			url: '/sandwiches/keywords',
			type: 'get',
			success: (data) => {
				this.setState({keywords: data})
			},
			error: () => {
				console.log("Error")
			}
		})
	}

	handleOnPaginate(pageNumber){
		this.state.fetchData.page = pageNumber
		this.setState(this.state)
		this.getSandwiches();
	}

	renderSandwiches(){
		return this.state.sandwiches.map((sandwich) =>{
			return (
				<div>
				   <SandwichHome 
					key={sandwich.id}
				    id={sandwich.id}
				    sandwich_image={sandwich.sandwich_image}
				    description={sandwich.description}
				    created_at={sandwich.created_at}
				    sandwiches={this.state.sandwiches} 
				    totalPages={this.state.meta.total_pages}
				    currentPage={this.state.meta.current_page}
				    onPaginate={this.handleOnPaginate}
				   />
				  </div>)
				 
		})
	}

	componentDidMount() {
		this.getSandwiches();
		this.getSearchOptions();
	}

	render(){

		return(
			 <div>
			 	{/* <div className="row text-center">
				 	<PaginatorSection totalPages={this.state.meta.total_pages} currentPage={this.state.meta.current_page} onPaginate={this.handleOnPaginate}/>
				</div> */}
				<div className="row">
					  <div className="col-sm-6 col-sm-offset-3">
						<Typeahead
						    options={this.state.keywords}
						    onOptionSelected={this.onOptionSelected.bind(this)}
						    maxVisible={10}
						    customClasses={{
						    	input: "form-control",
						    	results: "dropdown-list list-unstyled text-center col-sm-12 col-sm-offset-1",
						    	listItem: "dropdown-list-item",
						    	hover: "li-active"
						    }}

						  />
						</div>
				</div>
				<div className="row home-sandwich text-center">
				 {this.renderSandwiches()}
				</div>
			</div>
				
			)
	}
}



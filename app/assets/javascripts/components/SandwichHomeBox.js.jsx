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
		console.log("Called")
		$.ajax({
			url: '/sandwiches',
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
		var newSandwiches = this.state.sandwiches.concat(data.sandwiches)
		this.setState({
			didFetchData: true,
			sandwiches: newSandwiches, 
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
				data: {term: term, page: this.state.fetchData.page},
				success: (data) => {
					this.setState({sandwiches: data.sandwiches, meta: data.meta, didFetchData: true})
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

	handleOnPaginate(){
		this.state.fetchData.page += 1
		this.setState(this.state)
		this.getSandwiches();
	}

	renderSandwiches(){
		return this.state.sandwiches.map((sandwich) =>{
		let image = sandwich.sandwich_image ? sandwich.sandwich_image : sandwich.sandwich_image_url
			return (
				<div>
				   <Sandwich
					key={sandwich.id}
				    id={sandwich.id}
				    sandwich_image={image}
				    description={sandwich.description}
				    tags={sandwich.tags}
				    created_at={sandwich.created_at}
				    sandwiches={this.state.sandwiches} 
				    startingSandwich={sandwich.id}
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
			 <div className="sandwich-header">
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
				<div className="row next-page text-center">
					<i onClick={this.handleOnPaginate} className="fa fa-arrow-down"></i>
				</div>
			</div>
				
			)
	}
}



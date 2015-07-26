class NavSearch extends React.Component{

	handleChange(){
		this.props.onUserInput(
	    	this.refs.searchInput.getDOMNode().value
	    	)
	}

	render(){
		return( 
		   <nav className="row blue-grey">
		    <div className="nav-wrapper">
		      <form>
		        <div className="input-field">
		          <input 
		           id="search"
		           type="search"
		           ref="searchInput" 
		           value={this.props.userInput} 
		           onChange={this.handleChange}
		           required />
		          <label for="search"><i className="mdi-action-search"></i></label>
		          <i className="mdi-navigation-close" onClick={this.clearAndFocusInput}></i>
		        </div>
		      </form>
		    </div>
		  </nav>)
	}
}

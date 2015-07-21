class PaginatorLink extends React.Component{
	_handleOnClick(e){
		e.preventDefault();
		this.props.onPaginatorLinkClick(this.props.pageNumber)
	}

	render(){
		return(
  				<span className="btn btn-primary page-button" onClick={this._handleOnClick.bind(this)}>{this.props.pageNumber}</span>
  				)
	}
}
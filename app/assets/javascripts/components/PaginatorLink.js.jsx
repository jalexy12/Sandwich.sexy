class PaginatorLink extends React.Component{
	_handleOnClick(e){
		e.preventDefault();
		this.props.onPaginatorLinkClick(this.props.pageNumber)
	}

	render(){
		return <a href="#" onClick={this._handleOnClick.bind(this)}>&nbsp;{this.props.pageNumber}</a>
	}
}
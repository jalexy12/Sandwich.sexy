'use strict'

class PaginatorLink extends React.Component{
	_handleOnClick(e){
		e.preventDefault();
		this.props.onPaginatorLinkClick(this.props.pageNumber)
	}

	render(){
		return(
				<li onClick={this._handleOnClick.bind(this)}><a href="#">{this.props.pageNumber}</a></li>
  				)
	}
}
class PaginatorSection extends React.Component{
  handleOnClick(pageNumber){
      this.props.onPaginate(pageNumber)
  }

  pagination(){
    let i = 1;
    let arr = [];

    while (i < this.props.totalPages){
      arr.push(<PaginatorLink pageNumber={i} onPaginatorLinkClick={this.handleOnClick.bind(this)} />)
      i++
    }
    return arr
  }

  render(){
    if (this.props.totalPages > 1) {
      return ( 
       <ul className="pagination">
        {this.pagination()}
      </ul>)
    }else{
        return(<div>&nbsp;</div>)
    }
  }
}
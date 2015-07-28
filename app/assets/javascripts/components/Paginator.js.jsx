'use strict'

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
      <nav>
         <ul className="pagination">
           <li>
             <a href="#" aria-label="Previous">
               <span aria-hidden="true">&laquo;</span>
             </a>
           </li>
          {this.pagination()}
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
         </ul>
       </nav>)
    }else{
        return(<div>&nbsp;</div>)
    }
  }
}

    
    

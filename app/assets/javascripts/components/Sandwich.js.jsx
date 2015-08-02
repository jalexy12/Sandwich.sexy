'use strict'

function arrayObjectIndexOf(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

class Sandwich extends React.Component{

	constructor(props){
		super();
		// this.nextSandwich = this.nextSandwich.bind(this)
		this.renderComments = this.renderComments.bind(this)
		this.renderSandwich = this.renderSandwich.bind(this)
		this.onMouseOver = this.onMouseOver.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)

		this.state = {
			sandwiches: props.sandwiches,
			currentSandwich: arrayObjectIndexOf(props.sandwiches, props.startingSandwich, "id"),
			modalVisible: false,
			overlayShowing: false
		}
	}

	renderComments(){
		this.setState({ modalVisible: true })
	}

	renderSandwich(){
		console.log("Changed modal state to false")
		this.setState({ modalVisible: false })
	}

	handleOnOutOfSandwiches(){
		this.props.onPaginate(this.props.currentPage + 1)
	}

	onMouseOver(){
		this.setState({ overlayShowing: true })
	}

	onMouseLeave(){
		this.setState({ overlayShowing: false })
	}

	render(){
		let wrapperStyle = this.state.overlayShowing ? {zIndex: 2} : {display: "none"}
		let boxStyle = this.state.overlayShowing ? {backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: 1} : null
		let imageStyle = this.state.overlayShowing ? {opacity: .5} : null

		return(
			<div className="sandwich-box"
			     onMouseEnter={this.onMouseOver}
			     onMouseLeave={this.onMouseLeave}
			     >
			   <div className="col-sm-12 col-lg-4">
				  <div className="sandwich-image-wrapper text-center" style={boxStyle} >
					<img className="sandwich-image" style={imageStyle} src={this.props.sandwich_image} />
					  <div style={wrapperStyle} className="nav-wrapper">
		    			<button className="btn btn-danger btn-circle">
		    			  <i className="fa fa-close"></i>
		    			</button>
		    			<button onClick={this.renderComments} className="btn btn-default btn-circle btn-comment">
		    			  <i className="fa fa-comment-o"></i>
		    			</button>
		    			<button className="btn btn-default btn-share btn-circle">
		    			  <i className="fa fa-share"></i>
		    			</button>
		    			<button onClick={this.props.next} className="btn btn-primary btn-circle btn-like">
		    			   <i className="fa fa-heart" styles="color:white;"></i>
		    			</button>
		    		  </div>
		    		</div>
	  		    </div>
	  		     <Modal
	  		         visible={ this.state.modalVisible }
	  		         closable={ true }
	  		         onHide={ this.renderSandwich }
	  		         view={<SandwichModalView 
	  		         		commentBox={
	  		         			<CommentBox url={"/sandwiches/" + this.props.id + "/comments"} id={this.props.id} />}
	  		         			sandwich_image={this.props.sandwich_image}
	  		         		/> }>
	  		         <header>
	  		             <h1>Your Modal</h1>
	  		         </header>
	  		         <p>Hello there</p>
	  		     </Modal>
	  		   </div>
			)
	}
}
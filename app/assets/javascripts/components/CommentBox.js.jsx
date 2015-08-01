var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
     $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          console.log("DATA DATA DATA", data)
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  renderComments: function(){
    if (this.state.data.length <= 10){
      return( 
        <div className="comment-list">
          <CommentList data={this.state.data} />
        </div>
        )
    }else{
      return(
        <CommentListBox data={this.state.data} />
        )
    }

  },

  render: function() {
    return (
      <div>
        <div className="commentBox">
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
          {this.renderComments()}
      </div>
    );
  }
});

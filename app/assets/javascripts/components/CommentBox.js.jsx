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
          console.log("ajax request")
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },

  setupSubscription: function (){
    var that = this;

    App.comments = App.cable.subscriptions.create("CommentsChannel", {
      sandwich_id: this.props.id,

      connected: function () {
        console.log("Connected...")
        setTimeout(() => this.perform('follow',
                                      { sandwich_id: this.sandwich_id}), 1000 );
      },

      disconnected: function(){
        this.perform('unfollow')
      },

      received: function (data) {
        that.updateCommentList(data.comment);
      },
      });
  },

  updateCommentList: function(comment) {
      let new_comment = JSON.parse(comment)
      if (new_comment.sandwich_id === this.props.id){
        let comments = this.state.data
        comments.push(new_comment)
        this.setState({data: comments});
      }
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCommentsFromServer()
    this.setupSubscription()
  },

  renderComments: function(){
    if (this.state.data.length <= 6){
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

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        <Comment key={index} author={comment.author} comment={comment.comment} >
        </Comment>
      );
    });
    return(
      <ul className="list-unstyled commentList">
        {commentNodes}
      </ul>
    )
  }
});

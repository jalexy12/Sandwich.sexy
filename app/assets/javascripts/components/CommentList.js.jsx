var CommentList = React.createClass({
  render: function() {
    console.log(this.props.data)
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        <Comment key={index} comment={comment.comment} >
        </Comment>
      );
    });
      if (commentNodes.length <= 10){
        return (
          <ul className="list-unstyled commentList">
            {commentNodes}
          </ul>
        );
      }else{
        return(
            <CommentListBox comments={commentNodes} />
          )
      }
    
  }
});

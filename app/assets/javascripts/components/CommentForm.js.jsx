'use strict'

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    this.props.onCommentSubmit({text: text});
    React.findDOMNode(this.refs.text).value = '';
  },
  render: function() {
    return (
      <div className="row">
        <form className="commentForm" onSubmit={this.handleSubmit}>
           <div className="form-group">
            <input type="text" className="form-control" placeholder="Say something..." ref="text" />
           </div>
        </form>
      </div>
    );
  }
});

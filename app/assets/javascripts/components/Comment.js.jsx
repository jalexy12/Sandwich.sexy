'use strict'

var Comment = React.createClass({
  render: function() {
    return (
      <li className="comment">
       		<a href="#">{this.props.author.email}</a> <p> {this.props.comment} </p>
      </li>
    );
  }
});


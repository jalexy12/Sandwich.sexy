'use strict'

var Comment = React.createClass({
  render: function() {
  	console.log(this.props)
    return (
      <li className="comment">
       		{this.props.author.email} said: {this.props.comment}
      </li>
    );
  }
});


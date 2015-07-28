'use strict'

var Comment = React.createClass({
  render: function() {
    return (
      <li className="comment">
       		{this.props.comment}
      </li>
    );
  }
});


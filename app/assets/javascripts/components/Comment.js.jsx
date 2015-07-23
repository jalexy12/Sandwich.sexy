var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
       	<p>
       		{this.props.comment}
       	</p>
      </div>
    );
  }
});


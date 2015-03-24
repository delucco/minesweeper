var SizeButton = require('./sizeButton'); 

var Size = React.createClass({

  render: function() {
    var size = this.props.size;
    var buttons = ['small', 'medium', 'large'].map(function(choice){
      return (
        <SizeButton size={size} choice={choice} />
      )
    });
    return (
      <div className="size cf"> 
        <h3>SIZE</h3>
        {buttons}
      </div>
    );
  }

});

module.exports = Size;
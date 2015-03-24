var Size = require('./size');
var Level = require('./level');

var Settings = React.createClass({

  render: function(){
    return (
      <div className="settings cf"> 
        <Size size={this.props.settings.size} />
        <Level level={this.props.settings.difficulty} />
      </div>
    );
  }

});

module.exports = Settings;
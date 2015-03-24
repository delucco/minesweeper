var LevelButton = require('./levelButton');

var Level = React.createClass({

  render: function() {
    var difficulty = this.props.level;
    var buttons = ['easy', 'medium', 'hard'].map(function(choice){
      return (
        <LevelButton level={difficulty} choice={choice} />
      )
    });
    return (
      <div className="difficulty cf"> 
        <h3>DIFFICULTY</h3>
        {buttons}
      </div>
    );
  }

});

module.exports = Level;
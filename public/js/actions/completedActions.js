var AppDispatcher = require('../dispatchers/appDispatcher');

var completedActions = {

  explode: function() {
    AppDispatcher.handleViewAction({
      actionType: 'BOMB_TRIGGERED'
    });
  },

  revealSafety: function(field, remainder) {
    AppDispatcher.handleViewAction({
      actionType: 'SAFETY_UNCOVERED',
      data: field,
      remainder: remainder 
    });
  },

  resetField: function(field, remainder) {
    AppDispatcher.handleViewAction({
      actionType: 'FIELD_RESET',
      data: field,
      remainder: remainder
    });
  }

}

module.exports = completedActions;
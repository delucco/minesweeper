var AppDispatcher = require('../dispatchers/appDispatcher');

var completedActions = {

  explode: function() {
    AppDispatcher.handleViewAction({
      actionType: 'BOMB_TRIGGERED'
    });
  },

  revealSafety: function(field) {
    AppDispatcher.handleViewAction({
      actionType: 'SAFETY_UNCOVERED',
      data: field 
    });
  },

  resetField: function(field) {
    AppDispatcher.handleViewAction({
      actionType: 'FIELD_RESET',
      data: field
    });
  }

}

module.exports = completedActions;
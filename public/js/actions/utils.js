var Actions = require('./completedActions');

var sizes = {
  small: 10,
  medium: 20,
  large: 40
};

var level = {
  easy: 0.1,
  medium: 0.2,
  hard: 0.3
};


var minefield = {

  size: sizes['medium'],

  difficulty: level['medium'],

  rows: [],

  meadowsRevealed: 0,

  meadows: function() {
    return this.size * this.size - this.size * this.size * this.difficulty;
  },

  countBombs: function(i,j) {
    if (i<0 || i>this.size-1 || j<0 || j>this.size-1) {
      return 0;
    } else {
      return this.rows[i][j].bombs;  
    } 
  },

  calculateThreat: function() {
    for (var i=0; i<this.size; i++) {
      for (var j=0; j<this.size; j++) {
        this.rows[i][j].threat = this.countBombs(i-1,j) + this.countBombs(i-1,j+1) + this.countBombs(i-1,j-1) + this.countBombs(i,j+1) + this.countBombs(i,j-1) + this.countBombs(i+1,j-1) + this.countBombs(i+1,j) + this.countBombs(i+1,j+1); 
      }
    }
  },

  resize: function(size, difficulty, row, col, callback) {
    this.size = sizes[size] || this.size;
    this.rows = [];
    for (var i=0; i<this.size; i++) {
      this.rows.push([])
      for (var j=0; j<this.size; j++) {
        this.rows[i].push({bombs: 0, revealed: false, threat: 0});
      }
    }
    this.resow(difficulty, row, col, callback);
  },

  resow: function(difficulty, row , col, callback) {
    this.difficulty = level[difficulty] || this.difficulty;
    console.log('row = ' + row + ', col = ' + col);
    var count = 0;
    while (count < this.size * this.size * this.difficulty) {
      var randomRowIndex = Math.floor(Math.random() * this.size);
      var randomColIndex = Math.floor(Math.random() * this.size);
      if (this.rows[randomRowIndex][randomColIndex].bombs === 0 && (row !== randomRowIndex || col !== randomColIndex)) {
        this.rows[randomRowIndex][randomColIndex].bombs = 1;
        count++;
      }
    }
    this.calculateThreat();
    if (callback) {
      callback(this.rows, this.meadows());
    }
  },

  checkForMeadows: function(row, col, callback) {
    if (row<0 || row>this.size-1 || col<0 || col>this.size-1 || this.rows[row][col].revealed === true) {
      callback(this.rows, this.meadows() - this.meadowsRevealed);
    } else if (this.rows[row][col].bombs === 1) {
      for (var i=0; i<this.size; i++) {
        for (var j=0; j<this.size; j++) {
          this.rows[i][j].revealed = true;
          this.meadowsRevealed++;
        }
      }
      callback(this.rows, this.meadows() - this.meadowsRevealed);
    } else if (this.rows[row][col].threat > 0) {
      this.rows[row][col].revealed = true;
      this.meadowsRevealed++;
      callback(this.rows, this.meadows() - this.meadowsRevealed);
    } else {
      this.rows[row][col].revealed = true;
      this.meadowsRevealed++;
      this.checkForMeadows(row-1, col-1, callback);
      this.checkForMeadows(row-1, col, callback);
      this.checkForMeadows(row-1, col+1, callback);
      this.checkForMeadows(row, col-1, callback);
      this.checkForMeadows(row, col+1, callback);
      this.checkForMeadows(row+1, col-1, callback);
      this.checkForMeadows(row+1, col, callback);
      this.checkForMeadows(row+1, col+1, callback);
    }
  }

};

var utils = {

  checkMines: function (row, col) {
    if (minefield.meadowsRevealed === 0 && minefield.rows[row][col].bombs === 1) {
      console.log('you hit a bomb');
      minefield.resize(null, null, row, col, function(){
        console.log('i had to resow');
        utils.checkMines(row, col);
      });
    } else {
      if (minefield.rows[row][col].bombs === 1) {
        Actions.explode();
      } 
      minefield.checkForMeadows(row, col, function(meadows, remainder){
        Actions.revealSafety(meadows, remainder);
      });
    }
  },

  reset: function (size, difficulty) {
    minefield.meadowsRevealed = 0;
    minefield.resize(size, difficulty, null, null, function(data, remainder){
      Actions.resetField(data, remainder);
    })
  }

}

module.exports = utils;

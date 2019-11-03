const Statement = require('./Statement');
class LeftStatement extends Statement {
  constructor(command) {
    super(command,[]);
  }
  execute(tapeState){
    tapeState.idx -= 1;
    if(tapeState.idx < 0){
      tapeState.tape.unshift('BLANK');
      tapeState.idx = 0;
    }
  }
}
module.exports = LeftStatement;
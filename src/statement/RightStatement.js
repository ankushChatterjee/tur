const Statement = require('./Statement');
class RightStatement extends Statement {
  constructor(command) {
    super(command,[]);
  }
  execute(tapeState){
    tapeState.idx += 1;
    if(tapeState.idx >= tapeState.tape.length)
        tapeState.tape.push('BLANK');
    return tapeState.tape[tapeState.idx];
  }
}
module.exports = RightStatement;
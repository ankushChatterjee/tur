const Statement = require('./Statement');
class ShowStatement extends Statement {
  constructor(command) {
    super(command,[]);
  }
  execute(tapeState){
    console.log(tapeState.tape[tapeState.idx]);
  }
}
module.exports = ShowStatement;
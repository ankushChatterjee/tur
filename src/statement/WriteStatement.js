const Statement = require('./Statement');
class WriteStatement extends Statement {
  constructor(command,args) {
    super(command,args);
  }
  execute(tapeState){
    tapeState.tape[tapeState.idx] = this.args[0];
  }
}
module.exports = WriteStatement;
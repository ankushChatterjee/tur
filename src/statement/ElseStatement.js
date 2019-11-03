const Statement = require('./Statement');
class ElseStatement extends Statement {
  constructor(command) {
    super(command,[]);
  }
  execute(tapeState){
    throw 'Unexpected else';
  }
}
module.exports = ElseStatement;
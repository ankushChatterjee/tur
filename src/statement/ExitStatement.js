const Statement = require('./Statement');
class PrintStatement extends Statement {
  constructor(command) {
    super(command,[]);
  }
  execute(tapeState){
    process.exit(0);
  }
}
module.exports = PrintStatement;
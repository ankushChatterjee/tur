const Statement = require('./Statement');
class PrintStatement extends Statement {
  constructor(command,args) {
    super(command,args);
  }
  execute(tapeState){
    console.log(this.args);
  }
}
module.exports = PrintStatement;
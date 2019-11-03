const Statement = require('./Statement');
class LoopStatement extends Statement {
  constructor(command,args) {
    super(command,args);
    this.innerStatements = [];
  }
  checkCondition(currentVal) {
    let ourValue = this.args[1];
    if(this.args[0] == 'eq'){
      if(currentVal == ourValue)
        return true;
      else
        return false;
    }else if(this.args[0] == 'neq'){
      if(currentVal != ourValue)
        return true;
      else
        return false;
    }
  }
  execute(tapeState){
    while(this.checkCondition(tapeState.tape[tapeState.idx])){
      for(let statement of this.innerStatements){
        statement.execute(tapeState);
      }
    }
  }
}
module.exports = LoopStatement;
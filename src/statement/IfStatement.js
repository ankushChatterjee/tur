const Statement = require('./Statement');
class IfStatement extends Statement {
  constructor(command,args) {
    super(command,args);
    this.innerStatements = [];
    this.conditionState = false;

    this.thenStatements = [];
    this.elseStatements = [];
    this.innerStatements = [];

  }

  setInnertStatements(is) {
    this.innerStatements = [...is];
    this.separateThenElse();
  }

  separateThenElse() {
    let i = 0;
    while(i < this.innerStatements.length &&  this.innerStatements[i].command.trim() !== 'else'){
      this.thenStatements.push(this.innerStatements[i]);
      i++;
    }
    i++;
    while(i < this.innerStatements.length) {
      this.elseStatements.push(this.innerStatements[i]);
      i++;
    }
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
    let retValues = [];
    if(this.checkCondition(tapeState.tape[tapeState.idx])){
      for(let statement of this.thenStatements){
        let ret = statement.execute(tapeState);
        retValues.push(ret);
      }
    }else{
      for(let statement of this.elseStatements){
        let ret = statement.execute(tapeState);
        retValues.push(ret);
      }
    }
    console.log(retValues);
    return retValues;
  }
}
module.exports = IfStatement;
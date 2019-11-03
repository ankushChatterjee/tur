module.exports = class Statement {
  constructor(command,args){
    this.command = command;
    this.args = args;
  }
  execute(tapeState){}
}
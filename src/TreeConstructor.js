 const IfStatement = require('./statement/IfStatement');
 const LeftStatement = require('./statement/LeftStatement');
 const LoopStatement = require('./statement/LoopStatement');
 const PrintStatement = require('./statement/PrintStatement');
 const RightStatement = require('./statement/RightStatement');
 const ShowStatement = require('./statement/ShowStatement');
 const ShowTapeStatement = require('./statement/ShowTapeStatement');
 const WriteStatement = require('./statement/WriteStatement');
 const ExitStatement = require('./statement/ExitStatement');
 const ElseStatement = require('./statement/ElseStatement');


class TreeConstructor{
  constructor(program,dp){
    this.program = program;
    this.pc = 0;
    this.tree = [];
    this.directiveProcessor = dp;
  }
  tokenizeLine(line) {
    const tokens = line.trim().split(' ');
    const command = tokens[0].trim();
    const args = tokens.splice(1,tokens.length);
    return{
      command,
      args
    }
  }
  resolveStatementType(lineObj) {
    switch(lineObj.command){
      case 'if':
        this.pc += 1;
        const ifSt = new IfStatement(lineObj.command,lineObj.args);
        let is = this.constructBlockStatement();
        ifSt.setInnertStatements(is);
        return ifSt;
      case 'left':
        this.pc += 1;
        return new LeftStatement(lineObj.command, lineObj.args);
      case 'loop':
        this.pc += 1;
        const loopSt = new LoopStatement(lineObj.command,lineObj.args);
        loopSt.innerStatements = this.constructBlockStatement();
        return loopSt;
      case 'print':
        this.pc += 1;
        return new PrintStatement(lineObj.command, lineObj.args);
      case 'right':
        this.pc += 1;
        return new RightStatement(lineObj.command, lineObj.args);
      case 'show_tape':
        this.pc += 1;
        return new ShowTapeStatement(lineObj.command, lineObj.args);
      case 'show':
        this.pc += 1;
        return new ShowStatement(lineObj.command, lineObj.args);
      case 'write':
        this.pc += 1;
        return new WriteStatement(lineObj.command, lineObj.args);
      case 'exit':
        this.pc += 1;
        return new ExitStatement(lineObj.command, lineObj.args);
      case 'else':
        this.pc += 1;
        return new ElseStatement(lineObj.command, lineObj.args);
      default:
        throw "Unexpected Command " + lineObj.command;
    }
  }
  constructTree() {
    while(true){
      if(this.pc >= this.program.length)
        break;

      const lineObj = this.tokenizeLine(this.program[this.pc]);
      if(lineObj.command == ''){
        this.pc += 1;
        continue;
      }

      if(lineObj.command.charAt(0) == '#'){
        this.directiveProcessor(lineObj);
        this.pc += 1;
        continue;
      }

      this.tree.push(this.resolveStatementType(lineObj));
    }
    return this.tree;
  }
  constructBlockStatement() {
    let level = 0;
    let lines = [];

    while(true){
      if(this.pc >= this.program.length){
        throw "Block not ended";
      }
      
      const lineObj = this.tokenizeLine(this.program[this.pc]);
      if(lineObj.command == 'if' || lineObj.command == 'loop'){
        level += 1;
      }else if(lineObj.command == 'endblock'){
        if(level == 0){
          this.pc += 1;
          const blockConstructor = new TreeConstructor(lines,this.directiveProcessor);
          return blockConstructor.constructTree();
        }
        level -= 1;
      }

      lines.push(this.program[this.pc]);
      this.pc += 1;
    }

  }
}

module.exports = TreeConstructor;
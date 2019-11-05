const Statement = require('./Statement');
const chalk = require('chalk');

class ShowTapeStatement extends Statement {
  constructor(command) {
    super(command,[]);
  }
  execute(tapeState){

    let tape = tapeState.tape;
    let idx = tapeState.idx;

    let printOut = '... ';
    let i = 0;
    for(let cell of tape){
        if(i==idx)
            printOut += ' '+chalk.white(chalk.bold.bgRed('[ '+cell+' ]'));
        else
            printOut += ' '+chalk.red('[ '+cell+' ]');
        i += 1;
    }
    printOut += ' ...';

    console.log(printOut);

    return printOut;
  }
}
module.exports = ShowTapeStatement;
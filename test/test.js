const assert = require('assert');
const chalk = require('chalk');

const ShowStatement = require('../src/statement/ShowStatement');
const RightStatement = require('../src/statement/RightStatement');
const LeftStatement = require('../src/statement/LeftStatement');
const PrintStatement = require('../src/statement/PrintStatement');
const ShowTapeStatement = require('../src/statement/ShowTapeStatement');
const LoopStatement = require('../src/statement/LoopStatement');
const IfStatement = require('../src/statement/IfStatement');
const ElseStatement = require('../src/statement/ElseStatement');

describe('Different command classes - Tape state given', function() {
    it('ShowStatement executed', function() {
      let tapeState = {
        tape : [1,2,3,4],
        idx:0
      }
      let statement = new ShowStatement('show',[]);
      let ret = statement.execute(tapeState);
      assert.equal(ret,1);
    });

    it('RightStatement executed', function() {
      let tapeState = {
        tape : [1,2,3,4],
        idx:0
      }
      let statement = new RightStatement('right',[]);
      let ret = statement.execute(tapeState);
      assert.equal(ret,2);
    });

    it('LeftStatement executed', function() {
      let tapeState = {
        tape : [1,2,3,4],
        idx:0
      }
      let statement = new LeftStatement('left',[]);
      let ret = statement.execute(tapeState);
      assert.equal(ret,'BLANK');
    });

    it('PrintStatement executed', function() {
      let tapeState = {
        tape : [1,2,3,4],
        idx:0
      }
      let statement = new PrintStatement('print',['test']);
      let ret = statement.execute(tapeState);
      assert.equal(ret[0],'test');
    });

    it('ShowTapeStatement executed', function() {
      let tapeState = {
        tape : [1,2,3,4],
        idx:0
      }
      let printOut = '... ';
      let i = 0;
      for(let cell of tapeState.tape){
          if(i==0)
              printOut += ' '+chalk.white(chalk.bold.bgRed('[ '+cell+' ]'));
          else
              printOut += ' '+chalk.red('[ '+cell+' ]');
          i += 1;
      }
      printOut += ' ...';

      let statement = new ShowTapeStatement('show_tape');
      let ret = statement.execute(tapeState);
      assert.equal(ret,printOut);
    });

    
    it('LoopStatement executed', function() {
      let tapeState = {
        tape : [1,2,3],
        idx:0
      }
      let statement = new LoopStatement('neq',['neq','BLANK']);
      statement.innerStatements = [new RightStatement('right')];
      let ret = statement.execute(tapeState);
      assert.equal(ret[0],2);
      assert.equal(ret[1],3);
      assert.equal(ret[2],'BLANK');
    });

    it('IfStatement executed (Condition true)', function() {
      let tapeState = {
        tape : [1,2,3],
        idx:1
      }
      let statement = new IfStatement('if',['eq','2']);
      statement.setInnertStatements([new RightStatement('right'),new ElseStatement('else'),new LeftStatement('left')]);
      let ret = statement.execute(tapeState);
      assert.equal(ret[0],3);
    });

    it('IfStatement executed (Condition false)', function() {
      let tapeState = {
        tape : [1,2,3],
        idx:1
      }
      let statement = new IfStatement('if',['neq','2']);
      statement.setInnertStatements([new RightStatement('right'),new ElseStatement('else'),new LeftStatement('left')]);
      let ret = statement.execute(tapeState);
      assert.equal(ret[0],1);
    });

});
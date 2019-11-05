#!/usr/bin/env node

const fs = require('fs');
const file = process.argv[2];
const TreeConstructor  = require('./src/TreeConstructor');
const TuringMachine = require('./src/TuringMachine');


let tapeState = [];

function directiveProcessor(lineObj) {
  let {command, args} = lineObj;
  switch(command) {
    case '#init_tape':
      for(let arg of args[0].split(',')){
        tapeState.push(arg.trim());
      }
      break;
    default:
      throw "Unknown Directive " + command;
  }
}

function runWithFile(filePath) {
  const programContent = fs.readFileSync(file).toString();
  const  lines = programContent.split('\n');
  const tc = new TreeConstructor(lines,directiveProcessor);
  let ast = tc.constructTree();

  let machine = new TuringMachine(tapeState,ast);
  machine.run();
}


runWithFile(file);
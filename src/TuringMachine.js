class TuringMachine {
  constructor(init,ast){
    this.tape = [];
    this.idx = 0;
    if(init){
      this.tape = [...init];
    }
    this.ast = ast;
  }

  run() {
    let options = {
      tape:this.tape,
      idx:this.idx
    }
    for(let statement of this.ast){
      statement.execute(options);
      this.idx = options.idx;
    }
  }

}

module.exports = TuringMachine;
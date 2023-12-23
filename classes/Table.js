class Table {
  #choices
  #ResultCalculator

  constructor(choices, ResultCalculator) {
      this.#choices = choices;
      this.#ResultCalculator = ResultCalculator
  }

  displayTable = () => {

      const table = {};
      const choices = this.#choices
      choices.forEach(playerChoice => {
        
        table[playerChoice] = {};
    
        choices.forEach(computerChoice => {
    
          const result = this.#ResultCalculator.calculate(
            choices.indexOf(playerChoice), 
            choices.indexOf(computerChoice)
          );
    
          table[playerChoice][computerChoice] = result > 0 ? "Win" : result < 0 ? "Lose" : "Draw";
    
        });
    
      });
    
      console.table(table);
    
    };
}

module.exports = Table;
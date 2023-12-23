class ResultCalculator {
  #numChoices

  constructor(numChoices) {
      this.#numChoices = numChoices;
    }
    
    calculate(player, computer) {
      const half = (this.#numChoices - 1) / 2; 
      const p = player; 
      const n = this.#numChoices;
      
      return -Math.sign((p - computer + half + n) % n - half);
    }
}

module.exports = ResultCalculator;
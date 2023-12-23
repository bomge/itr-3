class Validtor {
    static validateChoices(choices) {

        if(new Set(choices).size !== choices.length) {
          console.log("Choices must be unique!");
          process.exit(1);  
        }
      
        if(choices.length < 3 || choices.length % 2 === 0) {
          console.log("Must have at least 3 odd number of choices!"); 
          process.exit(1);  
        } 
      }
}

module.exports = Validtor;
class Player {
    #choices
    #Table
    #readline

    constructor(choices, Table, readline){
        this.#choices = choices;
        this.#Table = Table;
        this.#readline = readline;
    }

    choice = () => {
        const Table = this.#Table
        const choices = this.#choices
        const numItems = choices.length

        console.log("\nSelect your move:"); 
        choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });
        
        console.log(`${numItems + 1}. Help`);
        console.log(`${numItems + 2}. Exit`);
        
        const input = this.#readline.question("> ");
        
        const selection = parseInt(input);
        if (selection === numItems + 1) {
            Table.displayTable();
            return this.choice(); 
        }
        if (selection === numItems + 2) {
            process.exit();
        }
        
        if (isNaN(selection) || selection < 1 || selection > numItems) {
            console.log("Invalid choice");
            return this.choice();
        }
        
        return selection - 1;
    }
}

module.exports = Player;
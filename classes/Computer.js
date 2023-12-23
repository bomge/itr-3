class Computer{
    #numItems
    #HMAC

    constructor(numItems, HMAC){
        this.#numItems = numItems;
        this.#HMAC = HMAC;
    }

    choice = ()=>{
        const choice = Math.floor(Math.random() * this.#numItems);
  
        const {hmacHex, key} = this.#HMAC.gen(choice)

        console.log(`Computer hmac key: ${key}`);
    
        return {
            choice,
            hmacHex,
            key 
        }; 
    }
}

module.exports = Computer
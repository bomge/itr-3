const crypto = require('crypto');

class HMAC {
    static gen(data){
        const key = crypto.randomBytes(16).toString('hex');
        const hmac = crypto.createHmac('sha3-256', key);
      
        hmac.update(data.toString()); 
        const hmacHex = hmac.digest('hex')

        return {
            key,
            hmac,
            hmacHex
        }
    }

    static check(data, key, originalHmacHex){
        const newHmac = crypto.createHmac('sha3-256', key); 
        newHmac.update(data.toString());
      
        const newHmacHex = newHmac.digest('hex');
      
        console.log(originalHmacHex,'computer HMAC')
        console.log(newHmacHex,'cheched HMAC')
      
        if (newHmacHex === originalHmacHex) {
          console.log('HMAC is valid!');
        } else {
          console.log('HMAC is not valid, data has been tampered with'); 
        }
    }
}

module.exports = HMAC;
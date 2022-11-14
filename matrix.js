let message = "jakob er veldig kul"
let messageIndex = 0

let output = ""

const ALPHABET = "abcdefghijklmnopqrstuvwxyz "


function findLetter(){
        for (let i = 0; i < ALPHABET.length; i++) {
            console.log(output + ALPHABET[i]);
            if (message.toLowerCase()[messageIndex] == ALPHABET[i]) {
                // console.log("LETTER FOUND "+ALPHABET[i]);
                output = output.concat(ALPHABET[i]) 
                messageIndex++
                break
            }
        }
    if (output.length !== message.length) {
        // console.log(`${output} is not equal to ${message}`);
        findLetter()
    }
}

findLetter()

import Stack from "../Stack/stack.ts"


// the string mutst start with an open brackets
// number of open brackets must be the same as number of closed brackets

class Validator {
    private stack = new Stack()
    private braces: object = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    isValid(input: string): string {
        for(let i:number = 0; i < input.length ; i++){
            if(this.braces[input[i]]){
                if(this.stack && this.stack.data()[this.stack.size() -1] == this.braces[input[i]]){
    
                    this.stack.pop()
                } 
            } else {
                this.stack.push(input[i])
            }
        }
        if(this.stack.size() > 0) {
            return "invalid"
        } else{
            return "valid"
            
        }
    }
}

const validator = new Validator()
const string = "{}("
console.log(validator.isValid(string))
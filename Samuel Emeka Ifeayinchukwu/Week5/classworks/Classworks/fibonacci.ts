// import Stack from "../Stack/stack";

class FSeries {
    ntthTerm(term: number): number {
        if(term <= 2){
            return 1
        }
        return this.ntthTerm(term - 1) + this.ntthTerm(term - 2)
    }
}


const f = new FSeries()
const value = f.ntthTerm(15)

console.log(value)


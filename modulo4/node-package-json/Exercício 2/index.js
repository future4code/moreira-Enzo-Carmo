//2.
const operation = (process.argv[2])
const firstNumber = Number (process.argv[3])
const secondNumber = Number (process.argv[4])




switch(operation){
    case "add":
        console.log(firstNumber + secondNumber)
        break;
    case "sub":
        console.log(firstNumber - secondNumber)
        break;
    case "mul":
        console.log(firstNumber * secondNumber)
        break;
    case "div":
        console.log(firstNumber / secondNumber)
}
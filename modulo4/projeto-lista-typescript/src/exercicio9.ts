function quantifyAnagrams(word:string) {
    let letters:number = word.length
    for(let i = word.length; i > 1; i--){
        letters = letters * (i - 1)
    }

    return letters
}

console.log(quantifyAnagrams('Enzo'))

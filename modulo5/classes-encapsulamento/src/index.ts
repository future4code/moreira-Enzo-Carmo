//Exercício 1



//a) O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe. Para chamá-lo, instanciamos a classe.
//b)
 class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       //console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(){
        return this.cpf
    }

    public getName(){
        return this.name
    }

    public getAge(){
        return this.age
    }

    public getBalance(){
        return this.balance
    }

    public getTransactions(){
        return this.transactions
    }
  
  }

  const account = new UserAccount("918237918273", 'Enzo', 20 )
  //console.log(account)


//c)







//Exercício 2


class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }


    public getDate(){
        return this.date
    }

    public getValue(){
        return this.value
    }

    public getDescription() {
        return this.description
    }
}



//Exercício 3

class Bank {
    private accounts: UserAccount[] = [];

    public getAccounts(): UserAccount[] {
      return this.accounts;
    }

    public addAccount(account: UserAccount): void {
      this.accounts.push(account);
    }
  } 
   




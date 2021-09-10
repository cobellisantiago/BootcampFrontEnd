/* --------------- Ejercicio 1 ---------------
 Crear un objeto CuentaBancaria mediante una función constructora que contenga los siguientes datos:
Nombre del titular.
Número de cuenta.
Apellido del titular.
Saldo.
Movimientos. */

const movementType = {
    DEBIT: 'Debit',
    CREDIT: 'Credit',
    INITIAL: 'INITIAL'
}
/**
 * Represents an account movement.
 * @constructor
 * @param {Number} amount - The amount of the movement done.
 * @param {movementType} type - The type of movement done. Debit, Credit.
 * @param {Number} type - The balance after movement has been done.
 */
function Movement(amount, type, balance){
    this.amount = amount,
    this.type = type,
    this.balance = balance
}

/**
 * Represents a bankAccount.
 * @constructor
 * @param {String} ownerName - The name of the owner of the account.
 * @param {String} accountNumber - The number of the account.
 * @param {String} ownerLastName - The last name of the owner of the account.
 * @param {Number} balance - The starting balance of the account.
 * @param {Array<Movement>} movements - The movements of the account.
 */
function BankAccount(ownerName, accountNumber, ownerLastName, balance, movements){
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.ownerLastName = ownerLastName;
    this.balance = balance;
    this.movements = movements;
    if(balance != undefined) this.movements.push(new Movement(balance, movementType.INITIAL, balance));
    
    this.showOnwerFullName = function(){
        console.log("My owner is " + this.ownerName + " " + this.ownerLastName);
    }

    this.debitMoney = function(amount){
        if((this.balance - amount) >= 0){
            this.balance -= amount;
            this.movements.push(new Movement(amount, movementType.DEBIT, this.balance));
        }else{
            console.log("Saldo insuficiente. Tu saldo actual es $" + this.balance);
        }
        console.log("Se debitó $" + amount + " -> Saldo: $" + this.balance)
    }

    this.addMoney = function(amount){
        this.balance += amount;
        this.movements.push(new Movement(amount, movementType.CREDIT, this.balance))
        console.log("Se acreditó $" + amount + " -> Saldo: $" + this.balance)
    }

    this.showBalance = function(){
        console.log("The balance of account number: "+ this.accountNumber + " is $" + this.balance);
    }

/**
 * Shows all the movements of the account.
 * If filteredMovements exist it will show those
 * @param {Array<Movement>} filteredMovements - The movements of the account.
 */
    this.showMovements = function(filteredMovements){
        console.log("The movements of account number "+ this.accountNumber + " are:");
        let movementsToShow = filteredMovements != undefined ? filteredMovements : this.movements;
        movementsToShow.forEach(movement => {
            switch (movement.type){
                case movementType.INITIAL:
                    console.log("Initial balance: $" + movement.amount);
                    break;
                case movementType.CREDIT:
                    console.log("+ $" + movement.amount + " -> Balance: $" + movement.balance);
                    break;
                case movementType.DEBIT:
                    console.log("- $" + movement.amount + " -> Balance: $" + movement.balance);
                    break;
            }
        })
    }

    this.filterMovementsBy = function(type){
        let filteredMovements = this.movements.filter(movement => {
            if(type != movementType.DEBIT){
                if(type != movementType.CREDIT){
                    return (movement.type == movementType.INITIAL)
                }else{
                    return (movement.type == movementType.CREDIT)
                }
            }else{
                return (movement.type == movementType.DEBIT)
            }
        })
        return filteredMovements;
    }

    this.showTotalAmountByMovementType = function(movementType){
        let movementsFilteredByType = this.filterMovementsBy(movementType);
        let totalAmount = 0;
        movementsFilteredByType.forEach(movement =>{
            totalAmount += movement.amount;
        })
        console.log("The total amount of the account number: "+ this.accountNumber + " made in " + movementType + " is $" + totalAmount);
    }

}

let newAccount = new BankAccount("Santiago", "33511552445", "Gonzales", 24556.00, []);

console.log(newAccount)

/* --------------- Ejercicio 2 ------------------
 Crear métodos para:
 Mostrar el nombre completo del titular.
 Debitar dinero de la cuenta. Si no tiene saldo suficiente tiene que mostrar un mensaje por consola y no realizar la operación.
 Acreditar dinero en la cuenta.
 Mostrar el saldo de la cuenta.
 Mostrar el historial de movimientos. 
*/


newAccount.showOnwerFullName()

console.log(newAccount.debitMoney(24500.00))
// console.log(newAccount);
console.log(newAccount.debitMoney(250.00))
// console.log(newAccount);
console.log(newAccount.addMoney(244.00))
// console.log(newAccount);
newAccount.showMovements();
console.log();
// --------------- Ejercicio 3 ------------------

/* Crear dos o tres cuentas, mostrar por consola el saldo inicial, 
realizar operaciones, mostrarlas por consola y luego mostrar el saldo final.
 */

let accountA = new BankAccount("Jorge", "33511552445", "Gonzales", 24556.00, []);
let accountB = new BankAccount("Milagros", "33511552445", "Rios", 0, []);
let accountC = new BankAccount("Roberto", "33511552445", "Schmitd", 10000, []);

accountA.showOnwerFullName();
accountA.addMoney(1500.00);
accountA.debitMoney(250.00);
accountA.showMovements();
accountA.showBalance();

console.log();

accountB.showOnwerFullName();
accountB.addMoney(1500.00);
accountB.addMoney(25000.00);
accountB.showMovements();
accountB.showBalance();

console.log();

accountC.showOnwerFullName();
accountC.debitMoney(1500.00);
accountC.debitMoney(2050.00);
accountC.showMovements();
accountC.showBalance();

// --------------- Ejercicio 4 ------------------
/* Luego de realizar los movimientos de crédito y débito, 
mostrar un historial de movimientos solo de créditos y otro solo de débitos y mostrarlos por consola. */
console.log("Filtering movements...");
accountC.showMovements(accountC.filterMovementsBy(movementType.DEBIT));
accountC.showMovements(accountC.filterMovementsBy(movementType.CREDIT));
accountC.showMovements(accountC.filterMovementsBy(movementType.INITIAL));

// --------------- Ejercicio 5 ------------------

/* Calcular y mostrar en consola el total de dinero debitado y el total de dinero acreditado.
 */
console.log();
console.log("Filtering movements...");
accountA.showMovements(accountA.filterMovementsBy(movementType.DEBIT));
accountA.showTotalAmountByMovementType(movementType.DEBIT);
console.log("Filtering movements...");
accountA.showMovements(accountA.filterMovementsBy(movementType.CREDIT));
accountA.showTotalAmountByMovementType(movementType.CREDIT);